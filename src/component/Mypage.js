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
        <main className='layout'>
            <Header />
            <Routes>
                <Route path="/modify" element={<Modify />} />
            </Routes>
            <div className='set'>
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
                                <button className='follow'>프로필 편집</button>
                            </Link>
                    </div>
                </div>

                            <h6 style={{
                                width:'170px',
                                height:'134px',
                                lineHeight: '172px',
                                border: 'solid 2px gray',
                                borderRadius: '5px'
                            }}>방문자 코멘트</h6>
            </div>
            
            
                <main className="she">
                    <div className="text">
                        <div>
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
                        
                        <h6 style={{
                            width:'390px',
                            height:'190px',
                            lineHeight: '190px',
                            textAlign: 'center',
                            border: 'solid 2px gray',
                            borderRadius: '5px'
                        }}>통계</h6>
                    </main>
                   {/* <button>저장</button><button>취소</button> */}
                    <h6 style={{
                            width:'200px',
                            height:'365px',
                            margin: '20px',
                            lineHeight: '365px',
                            textAlign: 'center',
                            border: 'solid 2px gray',
                            borderRadius: '5px'
                        }}>친구목록</h6>
            </div>
            <Footer/> 
        </main>
    )
}
export default Mypage;