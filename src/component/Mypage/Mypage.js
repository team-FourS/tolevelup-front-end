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
import axiosInstance from "../../axiosConfig"
// import axios from 'axios';
// import { PureComponent } from 'react';
import React, { useState,useEffect } from 'react';

const Mypage = () => {


    const [follower, setWer] = useState(false);
    const [fallowing, setWing] = useState(false);
    const [comment, setCommen] = useState(false);
    
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        axiosInstance.get('api/v1/users/my') // axiosConfig에서 baseURL을 설정하였으므로 상대 경로 사용
            .then((res) => {
                const { userId, userName } = res.data;
                setUserId(userId);
                setUserName(userName);
            })
            .catch((error) => {
                console.error('개인정보 가져오기 실패:', error);
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
                                        {/* <h4>{users && <textarea value={JSON.stringify(users)} readOnly={true}/>} */}
                                        <h4>{userName}</h4>
                                            <p className='userid'>{userId}</p>
                                        {/* <h4> {inputId.id} */}
                                            {/* <p className='userid'> {userId.id} </p> */}
                                        {/* </h4> */}
                                        {/* <h5 className='userint'> {userId.intro} </h5> */}
                                    </div>
                            <Link to="/pwcheck">    
                                <button className='btnpro'>프로필 편집</button>
                            </Link>
                            </div>
                        </div>

                        <div className="advice">
                        <img className ="mypage_advice" src={Advice1} alt='프로필'></img>
                            {/* <div className="inner_content">
                                <div className='comment_box'>
                                    너 전교 몇등이야?
                                    <p className='user_comment'>- 국연수</p>
                                </div>
                                <div className='comment_box'>
                                    다시 찍자고, 다큐멘터리
                                    <p className='user_comment'>- 김지웅</p>
                                </div>
                            </div> */}
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

                                <div className='count' onClick={() => setCommen(!comment)}>
                                    {comment && (
                                        <Modal closeModal={() => setCommen(!comment)}>
                                            <CommentDa />
                                        </Modal>
                                        )}

                                        <div className='cntnum'><strong>0</strong></div>
                                        <div className='follower_following_comment'>코멘트</div>
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
                                        <div className="exercise_currentBar" style={{width:'48px'}}></div>    
                                    </div>
                                </div>
                
                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="eat_currentBar" style={{width:'120px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="culture_currentBar" style={{width:'80px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="mypageBar">
                                        <div className="hobby_currentBar" style={{width:'180px'}}></div>    
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
                                    운동 안 해? 제일 적잖아. 운동좀 해. 
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
                {/* </motion.div> */}
            <Footer/>
        </main>
        )
    }
export default Mypage;