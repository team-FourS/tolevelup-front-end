import React from 'react';
import user from '../img/user.png'
// import setting from '../img/setting.png'
import {Routes, Route, Link} from "react-router-dom";
import Modify from "./Modify"
import "../css/Mypage.css"
import Header from "../component/Header";
import Footer from "../component/Footer";


const Mypage = () => {
 
    return (
        <main>
            <Header />
            <Routes className='layout'>
                <Route path="/modify" element={<Modify />} />
            </Routes>
            
            <div className='set'>
            <div className='Mains-right'><div></div></div>
                <div className="square">        
                <div className='bold1'>
                    <div className='space'>
                        <img className ="profil" src={user} alt='프로필'></img>
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
            
            
                <main className="she">
                   <div className='main_counter'>
                    <div className='count'>
                        <div className='cntnum'><strong>0</strong></div>
                        <div className='fallow'>팔로우</div>
                    </div>
                    <div className='count'>
                        <div className='cntnum'><strong>0</strong></div>
                        <div className='fallow'>팔로잉</div>
                    </div>
                    <div className='count'>
                        <div className='cntnum'><strong>0</strong></div>
                        <div className='fallow'>코멘트</div>
                    </div>
                    </div>
                    <div className="text">
                        <div className='hahaha'>
                            <strong className="locate">운동</strong>
                            <strong className="locate">취미</strong>
                            <strong className="locate">식습관</strong>
                            <strong className="locate">문화생활</strong>
                        </div>
                            <div className="main">
                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar" style={{width:'48px'}}></div>    
                                    </div>
                                </div>
                
                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar1" style={{width:'120px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar2" style={{width:'80px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar3" style={{width:'180px'}}></div>    
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div style={{
                            width:'390px',
                            height:'190px',
                            lineHeight: '190px',
                            textAlign: 'center',
                            border: 'solid 2px gray',
                            borderRadius: '5px'
                        }}>통계에</div>
                    </main>
                   {/* <button>저장</button><button>취소</button> */}
                    {/* <h6 className='list'>친구목록</h6>
                    <div className='Mains-left'><div></div></div> */}
            </div>
            
            <Footer/> 
        </main>
    )
}
export default Mypage;