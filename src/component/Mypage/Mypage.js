import userImg from '../../img/user.png'
import Advice1 from '../../img/advice2.png'
import {Routes, Route, Link} from "react-router-dom";
import PwCheck from "./PwCheck"
import "../../css/mypage/Mypage.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import Modal from "../Modal/Modal";
import Follower from "./Follower";
import Following from './Following';
import CommentDa from "./CommentDa";
import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import Graph from '../../img/growth.png'

const Mypage = () => {

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
    const [userComment, setuserComment] = useState('');
    const [userCommenterName, setuserCommenterName] = useState('');

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

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
        });
   
        // 서버의 코멘트가져오기
        axiosInstance.get('api/v1/users/comments/receive?page=0&size=2')
        .then((res) => {

            
            setuserComment(res.data.result.content[0].comment);
            setuserCommenterName(res.data.result.content[0].fromUserDate.name);

            //사용자 정보 출력
            console.log(setuserComment);

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
        });
    }, []);


    return (
        <main className='mypage_main'>
            
            <Header />
            <Routes>
                <Route path="/pwcheck" element={<PwCheck />} />
            </Routes>
            
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

                        <div className="advice">
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
                                {/* <div className='count' onClick={() => setComments(!comments)}> */}
                                    {/* {comments && (
                                        <Modal closeModal={() => setComments(!comments)}>
                                            <CommentDa />
                                        </Modal>
                                        )} */}

                                        <img className='cntnum_img' src={Graph} alt='통계'></img>
                                        <div className='follower_following_comment'>나의기록</div>
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
                                    <div className='comment_box'>
                                        {userComment} 
                                        <p className='user_comment'>{userCommenterName}</p>  
                                    </div>
                                    <div className='comment_box'>
                                        {userComment} 
                                        <p className='user_comment'>- 국연수</p>
                                    </div>
                                    <div className='comment_box'>
                                        나랑 뮤지컬 보러가자! 문화생활 해야지ㅋㅋㅋ
                                        <p className='user_comment'>- 김지웅</p>
                                    </div>

                                    <div className='comment_box'>
                                        분발해~~ 오늘 한 게 뭐야
                                        <p className='user_comment'>- 이수현</p>
                                    </div>
                                </div>
                        </div>                          
                    </div>
                         </div>
                            </div>
                        </main>
                    <div className='Mains-left'></div>
                </div>
            <Footer/>
        </main>
        )
    }
export default Mypage;