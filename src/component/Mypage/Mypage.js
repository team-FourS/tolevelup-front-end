import { Routes, Route, Link } from 'react-router-dom';
import PwCheck from './PwCheck';
import MainRecord from '../Record/MainRecord';
import '../../css/mypage/Mypage.css';
import Header from '../Header/Header';
import Footer from '../Footer';
import Modal from '../Modal/Modal';
import Follower from './Follower';
import Following from './Following';
// import CommentDa from './CommentDa';
import axiosInstance from '../../axiosConfig';
import React, { useState, useEffect } from 'react';
import Graph from '../../img/bar-graph.png';
import LoadSpinner from '../Spinner/SpinnerCompo';
import { format } from 'date-fns';
import user from "../../img/T-logo.png";

const Mypage = () => {

  const currentDate = new Date();

// 원하는 날짜 계산
  const year = format(currentDate, 'yyyy'); // 연도 추출
  const month = format(currentDate, 'MM'); // 월 추출
  //const nextMonth = addMonths(currentDate, 1);// 한 달 더하기
  //Cconst previousMonth = subMonths(currentDate, 1);// 한 달 빼기
  const formattedDate = format(currentDate, 'yyyy-MM-dd');// 날짜 형식 지정

  // 스피너(로딩중)
  const [Loading, setLoading] = useState(true);

  // 모달용 const
  const [follower, setWer] = useState(false);
  const [fallowing, setWing] = useState(false);

  // 사용자의 정보 const
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userIntro, setUserIntro] = useState(null);

  // exp용 const
  const [expExercise, setexpExercise] = useState('');
  const [expCulture, setexpCulture] = useState('');
  const [expHobby, setexpHobby] = useState('');
  const [expEat, setexpEat] = useState('');

  // 코멘트용 const
  const [userComments, setuserComments] = useState([]); // 배열 끌고오기

  // 좋아요 수 카운트
  const [userHeart, setuserHeart] = useState(''); // 배열 끌고오기

  // Follower와 Following 수, 받은 코멘트 수
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const [myRank, setmyRank] = useState([]);
  const [CompleteMission, setCompleteMission] = useState([]);
  const [userLevel, setuserLevel] = useState([]);

  useEffect(() => {

    // 서버의 사용자 정보 가져오기
    axiosInstance
      .get('api/v1/users/my')
      .then((res) => {
        // 사용자의 정보 가져오기
        setUserName(res.data.result.userData.name);
        setUserId(res.data.result.userData.id);
        setUserIntro(res.data.result.userData.intro);

        setuserLevel(res.data.result.userData.level);
        // console.log(formattedDate);//오늘날짜확인

        // exp 가져오기
        setexpExercise(res.data.result.expData[0].expData);
        setexpEat(res.data.result.expData[1].expData);
        setexpCulture(res.data.result.expData[2].expData);
        setexpHobby(res.data.result.expData[3].expData);
        setLoading(false);
        const currentUserID = res.data.result.userData.id;

        //사용자의 월 별 랭킹 가져오기
        axiosInstance
        .get(`api/v1/users/rank?year=${year}&month=${month}`)
        .then((rankRes) => {
          // 랭킹 정보 배열에서 현재 로그인한 사용자의 ID와 일치하는 항목을 찾기
          const userRank = rankRes.data.result.rankList.find(item => item.userData.userId === currentUserID);
          if (userRank) {
            setmyRank(userRank.rank);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log('Failed to fetch rank:', error);
        });

        
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
        setLoading(true);
      });

    // 서버의 코멘트 가져오기
    axiosInstance
      .get('api/v1/users/comments/receive?page=0&size=5')
      .then((res) => {
        // content의 모든 정보를 commentsData에 담음
        const commentsData = res.data.result.content;
        setuserComments(commentsData);
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
        setLoading(true); // 오류시 스피너 무한재생
      });

    // 좋아요 수 가져오기
    axiosInstance
      .get('api/v1/users/likes')
      .then((res) => {
        // content의 모든 정보를 commentsData에 담음
        const HeartData = res.data.result;
        setuserHeart(HeartData);
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
        setLoading(true); // 오류시 스피너 무한재생
      });

    // Follower 수 가져오기
    axiosInstance
      .get('api/v1/users/follower/count')
      .then((res) => {
        const followerCount = res.data.result;
        setFollowerCount(followerCount);
      })
      .catch((error) => {
        console.log('Failed to fetch follower count:', error);
      });

    // Following 수 가져오기
    axiosInstance
      .get('api/v1/users/following/count')
      .then((res) => {
        const followingCount = res.data.result;
        setFollowingCount(followingCount);
      })
      .catch((error) => {
        console.log('Failed to fetch following count:', error);
      });

    // 전체 완료 미션가져오기
    axiosInstance.get('api/v1/users/missions/counts')
    .then((res) => {
      setCompleteMission(res.data.result);
    })
    .catch((error) => {
      console.log('Failed to fetch user info:', error);
    });


  }, [formattedDate, month, year]);

  // 등록일 변경 함수
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.') // .로 변경
      .replace(/\. /g, '.')
      .replace(',', '');
    return formattedDate;
  };

  return (
    <main className='mypage_main'>
      <Header />

      <Routes>
        <Route path="/pwcheck" element={<PwCheck />} />
        <Route path="../Record/MainRecord" element={<MainRecord />} />
      </Routes>
      {Loading ? (
        // 로딩 중인 경우 스피너를 렌더링
        <LoadSpinner />
      ) : (
        <div className='set'>
          <div className='Mains-right'></div>
          <div className="square1">
            <div className='bold1'>
              <div className='space'>
                <img className="mypage_profile profile-img" src={user} alt='프로필'></img>
                <div className="nickname">
                  <h4 className='userName'>Lv.{userLevel} {userName}</h4>
                  <p className='userid'>{userId}</p>
                  <h5 className='userint'> {userIntro} </h5>
                </div>
                <Link to="/pwcheck">
                  <button className='btnpro'>프로필 편집</button>
                </Link>
              </div>
            </div>

            {/* 좋아요 수 카운트*/}
            <div className="heart_bold">
              <p className="heart_count">
                <img width="20" height="20" src="https://img.icons8.com/fluency/48/pixel-heart.png" alt="pixel-heart" />
                이번 달 좋아요 수 
                <img width="20" height="20" src="https://img.icons8.com/fluency/48/pixel-heart.png" alt="pixel-heart" />
              </p>
              <p className="heart_count_number">{userHeart}</p>
            </div>

            <div className="heart_bold">
            <p className="heart_count"><img width="20" height="20" src="https://img.icons8.com/emoji/48/trophy-emoji.png" alt="pixel-heart" />
            이번 달 랭킹<img width="20" height="20" src="https://img.icons8.com/emoji/48/trophy-emoji.png" alt="pixel-heart" /></p>
              <p className="Rank_number">{myRank}위</p>
            </div>
          </div>
          <main className='square2'>
            <div className="square3">
              <div className='main_counter'>
                <div className='count' onClick={() => setWer(!follower)}>
                  {follower && (
                    <Modal closeModal={() => setWer(!follower)}>
                      <Follower />
                    </Modal>
                  )}
                  <div className='cntnum'><strong>{followerCount}</strong></div>
                  <div className='follower_following_comment'>팔로워</div>
                </div>
                <div className='count' onClick={() => setWing(!fallowing)}>
                  {fallowing && (
                    <Modal closeModal={() => setWing(!fallowing)}>
                      <Following />
                    </Modal>
                  )}
                  <div className='cntnum'><strong>{followingCount}</strong></div>
                  <div className='follower_following_comment'>팔로잉</div>
                </div>

                <div className='count'>
                  <div className='cntnum'><strong>{CompleteMission}</strong></div>
                  <div className='follower_following_comment'>완료미션</div>
                </div>

                <div className='count'>
                  <Link to="/MainRecord">
                    <div>
                      <img className='cntnum_img' src={Graph} alt='통계'></img>
                      <div className='follower_following_comment'>나의기록</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mission_bar_group">
                <div className="mission_bar">
                  <div className='bar_title'>
                    <strong className="barName">운동</strong>
                    <strong className="barName">식습관</strong>
                    <strong className="barName">문화생활</strong>
                    <strong className="barName">취미</strong>
                  </div>
                  <div>
                    <div className="main_bar">
                      <div className="status-hp">
                        <div className="mypageBar">
                          <div className="exercise_currentBar" style={{ width: `${expExercise}px` }}></div>
                        </div>
                      </div>

                      <div className="status-hp">
                        <div className="mypageBar">
                          <div className="eat_currentBar" style={{ width: `${expEat}px` }}></div>
                        </div>
                      </div>

                      <div className="status-hp">
                        <div className="mypageBar">
                          <div className="culture_currentBar" style={{ width: `${expCulture}px` }}></div>
                        </div>
                      </div>

                      <div className="status-hp">
                        <div className="mypageBar">
                          <div className="hobby_currentBar" style={{ width: `${expHobby}px` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='statistics'>
                <div className="scroll_box">
                  <div className="inner_content">
                    {userComments.length === 0 ? (
                      // 코멘트 목록이 비어 있는 경우 '받은 코멘트가 없습니다.' 메시지를 표시
                      <div className="no-comments">받은 코멘트가 없습니다.</div>
                    ) : (
                      userComments.map((commentData, index) => (
                        <div className='comment_box' key={index}>
                          <p className='mypage_comment_text'> {commentData.comment}  </p>
                          <p className='user_comment'><p className="get-registered-mypage">
                            {`등록일: ${formatDate(commentData.registeredAt)}`}
                          </p>{commentData.fromUserData.name }</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className='Mains-left'></div>
        </div>
      )}
      <Footer />
    </main>
  );
};

export default Mypage;
