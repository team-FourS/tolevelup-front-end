import React from 'react';
import user from '../../img/user.png'
import {Routes, Route, Link} from "react-router-dom";
import Modify from "./Modify"
import "../../css/mypage/Mypage.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Follower from "./Follower";
import Following from './Following';
import CommentDa from "./CommentDa";

const Mypage = () => {
    const [follower, setWer] = useState(false);
    const [fallowing, setWing] = useState(false);
    const [comment, setCommen] = useState(false);

    return (
        <main>
            <Header />
            <Routes>
                <Route path="/modify" element={<Modify />} />
            </Routes>
            
            <div className='set'>
                <div className='Mains-right'></div>
                    <div className="square1">        
                        <div className='bold1'>
                            <div className='space'>
                                <img className ="mypage_profile" src={user} alt='프로필'></img>
                                    <div className="nickname">
                                        <h4> 최우식
                                            <h6 className='userid'>_whoops</h6>
                                            </h4>
                                
                                <h5 className='userint'>싫어하는거요? 국연수요.</h5>
                            </div>

                            <Link to="/modify">    
                                <button className='btnpro'>프로필 편집</button>
                            </Link>
                    </div>
                </div>

                        <div className="scroll_box">
                            <div className="inner_content">
                                <div className='comment_box'>
                                    너 전교 몇등이야?
                                    <p className='user_comment'>- 국연수</p>
                                </div>
                                <div className='comment_box'>
                                    다시 찍자고, 다큐멘터리
                                    <p className='user_comment'>- 김지웅</p>
                                </div>
                                {/* <div className='comment_box'>
                                    내용3
                                </div> */}
                            </div>
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
                        
                    <div className="text">
                    <div className="mission_bar">
                        <div className='bar_title'>
                            <strong className="locate">운동</strong>
                            <strong className="locate">식습관</strong>
                            <strong className="locate">문화생활</strong>
                            <strong className="locate">취미</strong>
                        </div>
                        <div>
                            <div className="main_bar">
                            <div className="status-hp">
                                    <div className="bar">
                                        <div className="exercise_currentBar" style={{width:'48px'}}></div>    
                                    </div>
                                </div>
                
                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="eat_currentBar" style={{width:'120px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="culture_currentBar" style={{width:'80px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="hobby_currentBar" style={{width:'180px'}}></div>    
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='statistics'>    
                            <ul class="axis_y">
                                <li class="item">0<span class="blind">시간</span></li>
                                <li class="item">3<span class="blind">시간</span></li>
                                <li class="item">6<span class="blind">시간</span></li>
                                <li class="item">9<span class="blind">시간</span></li>
                                <li class="item">12<span class="blind">시간</span></li>
                            </ul>
                            <ul class="axis_x">
                                <li class="time">0<span class="blind">시간</span></li>
                                <li class="time">3<span class="blind">시간</span></li>
                                <li class="time">6<span class="blind">시간</span></li>
                                <li class="time">9<span class="blind">시간</span></li>
                                <li class="time">12<span class="blind">시간</span></li>
                            </ul>
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