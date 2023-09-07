import React from 'react';
import '../../css/header/Header.css'
import {Link} from "react-router-dom";
import Logo from '../../img/ToLevelUp_logo.png'
import {BiBell} from "react-icons/bi"
import { FcInfo } from "react-icons/fc";

import { useState } from "react";
import Modal from "../Modal/Modal";
import Alarm from "./Alarm";
import Manual from "./Manual";
import { useNavigate } from "react-router-dom";


const Header = () => {
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
                        <img onClick={gohome} className ="logoimg" src={Logo} alt='로고' />
                    </div>
                </div>
                    <FcInfo onClick={() => setManual(!manual)} className='manual_icon'/>
                    {manual && (
                        <Modal closeModal={() => setManual(!manual)}>
                            <Manual />
                        </Modal>
                    )}
                    
                    <BiBell onClick={() => setAlarm(!alarm)} className='bell_icon'/>
                    {alarm && (
                        <Modal closeModal={() => setAlarm(!alarm)}>
                            <Alarm />
                        </Modal>
                    )}
                <Link to='/Logout'>               
                    <div className='header_logout' > | 로그아웃</div>
                </Link>
            </div>
            {/* <hr/> */}
            <div className="header_line"></div>
        </main>
        
    )
}

export default Header;