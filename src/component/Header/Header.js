import React from 'react';
import '../../css/header/Header.css'
// import {Link} from "react-router-dom";
// import Logo from '../../img/ToLevelUp_logo.png'
import fullnameLogo from '../../img/logo/fullname-logo.png'

import {BiBell} from "react-icons/bi"
import { FcInfo } from "react-icons/fc";

import { useState } from "react";
import ManualModal from "../Modal/ManualModal";
import Alarm from "./Alarm";
import Manual from "./Manual";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const handlelogOut = () => {
        localStorage.removeItem("Token");// localstorage에 저장되어 있던 토큰을 지운다.
        sessionStorage.removeItem("name");// localstorage에 저장되어 있던 토큰을 지운다.
        sessionStorage.removeItem("id");// localstorage에 저장되어 있던 토큰을 지운다.
        localStorage.removeItem("missionStatus");
        document.location.href = "/";
    }

    const [alarm, setAlarm] = useState(false);
    const [manual, setManual] = useState(false);

    //이미지 클릭시 페이지 이동
    const movePage = useNavigate();

    function gohome(){
        movePage('../Mission');
    }
    
    return (
        <main className="header">
            <div style={{alignItems:'center',display:'inline-flex'}}>
                <div>
                    <div>
                        <img onClick={gohome} className ="logoimg" src={fullnameLogo} alt='로고' />
                    </div>
                </div>
                    <FcInfo onClick={() => setManual(!manual)} className='manual_icon'/>
                    {manual && (
                        <ManualModal closeModal={() => setManual(!manual)}>
                            <Manual />
                        </ManualModal>
                    )}
                    
                    <BiBell onClick={() => setAlarm(!alarm)} className='bell_icon'/>
                    {alarm && (
                        <ManualModal closeModal={() => setAlarm(!alarm)}>
                            <Alarm />
                        </ManualModal>
                    )}
            
                    <div className='header_logout' onClick={handlelogOut}> | 로그아웃</div>
                
            </div>
            {/* <hr/> */}
            <div className="header_line"></div>
        </main>
        
    )
}

export default Header;