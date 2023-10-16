import userImg from '../../img/user.png'
import Advice1 from '../../img/advice2.png'
import {Routes, Route, Link} from "react-router-dom";
import PwCheck from "./PwCheck";
import MainRecord from "../Record/MainRecord"
import "../../css/mypage/Mypage.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import Modal from "../Modal/Modal";
import Follower from "./Follower";
import Following from './Following';
import CommentDa from "./CommentDa";
import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import Graph from '../../img/bar-graph.png'

import LoadSpinner from '../Spinner/SpinnerCompo';

const Mypage = () => {

    //스피너(로딩중)
    const [Loading,setLoading] = useState(true);

    //모달용const
    const [follower, setWer] = useState(false);
    const [fallowing, setWing] = useState(false);
    const [comments, setComments] = useState(false);
    
    //사용자의 정보 const
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userIntro, setUserIntro] = useState(null);

    //exp용 const
    const [expExercise, setexpExercise] = useState('');
    const [expCulture, setexpCulture] = useState('');
    const [expHobby, setexpHobby] = useState('');
    const [expEat, setexpEat] = useState('');

    //코멘트용 const
    const [userComments, setuserComments] = useState([]);//배열 끌고오기

    //좋아요 수 카운트
    const [userHeart, setuserHeart] = useState('');//배열 끌고오기

    useEffect(() => {

// 서버의 사용자 정보 가져오기
        axiosInstance.get('api/v1/users/my')
        .then((res) => {

        //사용자의 정보 가져오기
            setUserName(res.data.result.userData.name);
            setUserId(res.data.result.userData.id);
            setUserIntro(res.data.result.userData.intro);

        //exp 가져오기
            setexpExercise(res.data.result.expData[0].expData);
            setexpEat(res.data.result.expData[1].expData);
            setexpCulture(res.data.result.expData[2].expData);
            setexpHobby(res.data.result.expData[3].expData);
            
        //사용자 정보 출력
            // console.log(res.data);

            setLoading(false);

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
            setLoading(true);
        });

// 서버의 코멘트가져오기
        axiosInstance.get('api/v1/users/comments/receive?page=0&size=5')
        .then((res) => {

        //content의 모든 정보를 commentsData에 담음
            const commentsData = res.data.result.content;
            setuserComments(commentsData);

        //스피너
            setLoading(false);

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
            setLoading(true);//오류시 스피너 무한재생
        });

// 좋아요 수 가져오기
        axiosInstance.get('api/v1/users/likes')
        .then((res) => {

        //content의 모든 정보를 commentsData에 담음
            const HeartData = res.data.result;
            setuserHeart(HeartData);

        //스피너
            setLoading(false);

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
            
            setLoading(true);//오류시 스피너 무한재생
        });
    }, []);

    // 등록일 변경 함수
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.')  // .로 변경
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
            {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
            <div className='set'>
                <div className='Mains-right'></div>
                    <div className="square1">        
                        <div className='bold1'>
                            <div className='space'>
                                <img className ="mypage_profile" src={userImg} alt='프로필'></img>
                                    <div className="nickname">                                      
                                        <h4 className='userName'>{userName}</h4>
                                            <p className='userid'>{userId}</p>
                                            <h5 className='userint'> {userIntro} </h5>
                                    </div>
                            <Link to="/pwcheck">    
                                <button className='btnpro'>프로필 편집</button>
                            </Link>
                            </div>
                        </div>

                        {/* 좋아요 수 카운드*/}
                        <div className="heart_bold">
                            <p className ="heart_count">이번달 좋아요 수는?<img width="20" height="20" src="https://img.icons8.com/fluency/48/pixel-heart.png" alt="pixel-heart"/></p>
                            <p className ="heart_count_numbert">{userHeart}</p>
                        </div>

                        {/* 명언 이미지*/}
                        <div className="time1">
                            <img className ="mypage_advice" src={Advice1} alt='프로필'></img>
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
                                    <div className='cntnum'><strong>0</strong></div>
                                    <div className='follower_following_comment'>팔로워</div>
                                </div>
                                <div className='count' onClick={() => setWing(!fallowing)}>
                                {fallowing && (
                                    <Modal closeModal={() => setWing(!fallowing)}>
                                        <Following />
                                    </Modal>
                                    )}

                                    <div className='cntnum'><strong>0</strong></div>
                                    <div className='follower_following_comment'>팔로잉</div>
                                </div>

                                <div className='count' onClick={() => setComments(!comments)}>
                                    {comments && (
                                        <Modal closeModal={() => setComments(!comments)}>
                                            <CommentDa />
                                        </Modal>
                                        )}

                                        <div className='cntnum'><strong>0</strong></div>
                                        <div className='follower_following_comment'>코멘트</div>
                                </div>
                                <div className='count'>
                        {/* 세연 -  통계페이지 활용 코드(예정)start */}
                                {/* <div className='count' onClick={() => setComments(!comments)}> */}
                                    {/* {comments && (
                                        <Modal closeModal={() => setComments(!comments)}>
                                            <CommentDa />
                                        </Modal>
                                        )} */}
                        {/* 세연 -  통계페이지 활용 코드(예정)end */}
                        <Link to="/MainRecord">
                                    <div>        
                                        <img className='cntnum_img' src={Graph} alt='통계'></img>
                                        <div className='follower_following_comment'>나의기록</div>
                                    </div>
                                    </Link> 
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
                                        <div className="exercise_currentBar" style={{ width: `${expExercise}%` }}></div>    
                                    </div>
                                </div>
                
                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="eat_currentBar" style={{ width: `${expEat}%` }}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="culture_currentBar" style={{ width: `${expCulture}%` }}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="hobby_currentBar" style={{ width: `${expHobby}%` }}></div>    
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
        <p className='user_comment'><p className="get-registered-mypage">{`등록일: ${formatDate(commentData.registeredAt)}`}</p>{commentData.fromUserDate.name}</p>
      </div>
    ))
  )}
</div>
                        </div>                          
                    </div>
                        </div>
                            </div>
                        </main>
                    <div className='Mains-left'></div>
                </div>
                )}
            <Footer/>
        </main>
        )
    }
export default Mypage;