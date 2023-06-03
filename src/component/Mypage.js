import React from 'react';
import user from '../img/user.png'
import setting from '../img/setting.png'
import {Routes, Route, Link} from "react-router-dom";
import Modify from "./Modify"
import "../css/Mypage.css"
import Header from "../component/Header";
import Footer from "../component/Footer";

const Mypage = () => {
    return (
        <main className="layout">
            <Header />
            <Routes className="layout">
                <Route path="/modify" element={<Modify />} />
            </Routes>
        <div className='get'>
            <div className='set'>
                <div className="square">
                    
                        <img className ="profil" src={user} alt='프로필' style={{width:"70px",height:"70px", margin: "auto"}}></img>
                    
                    <div style={{verticalAlign:"middle"}}>
                    <h4 style={{margin:'2px'}}>__님
                    <Link to="/modify">
                        <img className ="setting" src={setting} alt='프로필 변경' title="프로필 변경" style={{
                            width:"15px",
                            height:"15px",
                            padding:"1px",
                            verticalAlign:"middle",
                            marginLeft:"5px"}} ></img></Link>
                    </h4>
                </div>
                        <h6 style={{
                            width:'150px',
                            height:'25px',
                            backgroundColor:'lightgray'
                        }}>한줄소개</h6>
                            <h6 style={{
                                width:'150px',
                                height:'172px',
                                backgroundColor:'lightgray'
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
                                        <div className="currentBar" style={{width:'48px'}}></div>    
                                    </div>
                        
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar" style={{width:'80px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="currentBar" style={{width:'48px'}}></div>    
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <h6 style={{
                            width:'390px',
                            height:'162px',
                            backgroundColor:'lightgray'
                        }}>통계</h6>
                    </main>
                   {/* <button>저장</button><button>취소</button> */}
                    <h6 style={{
                            width:'180px',
                            height:'336px',
                            backgroundColor:'lightgray',
                            margin: '20px'
                        }}>친구목록</h6>
            </div>
            </div>
            <Footer/> 
        </main>
    )
}
export default Mypage;