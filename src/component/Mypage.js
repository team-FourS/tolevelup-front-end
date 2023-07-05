import React from 'react';
import user from '../img/user.png'
import setting from '../img/setting.png'
import {Routes, Route, Link} from "react-router-dom";
import Modify from "./Modify"
import "../css/Mypage.css"
import Header from "../component/Header";
import Footer from "../component/Footer";
import {useState} from 'react';

const Mypage = () => {
    const [buttonText, setButtonText] = useState('팔로우');

    function handleClick() {
        setButtonText('팔로잉');
  }
    return (
        <main className="layout">
            <Header />
            <Routes className="layout">
                <Route path="/modify" element={<Modify />} />
            </Routes>
            <div className='set'>
                <div className="square">
                    
                        <img className ="profil" src={user} alt='프로필' style={{width:"95px",height:"95px", margin: "auto"}}></img>
                    
                    <div style={{verticalAlign:"middle", display:"inline-flex"}}>
                      
                            <h4 className="lv" style={{margin:'2px'}}>Lv._</h4>
                            <h4 className="nickname" style={{margin:'2px'}}>__님 
                        
                    <Link to="/modify">
                        <img className ="setting" src={setting} alt='프로필 변경' title="프로필 변경" style={{
                            width:"15px",
                            height:"15px",
                            padding:"1px",
                            verticalAlign:"middle",
                            marginLeft:"5px"}} ></img></Link>
                    </h4>
                </div>
                        <button className='follow' onClick={handleClick}>{buttonText}</button>

                        <h6 style={{
                            width:'173px',
                            height:'25px',
                            lineHeight: '25px',
                            borderBottom: 'solid 2px gray'
                        }}>한줄소개</h6>
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