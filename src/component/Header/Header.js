import React from 'react';
import '../../css/header/Header.css'
// import Logout from './Login/Logout'
import {Link} from "react-router-dom";
import Logo from '../../img/ToLevelUp_logo.png'
import {BiBell} from "react-icons/bi"
import { FcInfo } from "react-icons/fc";

import { useState } from "react";
import Modal from "../Modal/Modal";
import Alarm from "./Alarm";
import Manual from "./Manual";

const Header = () => {
    const [alarm, setAlarm] = useState(false);
    const [manual, setManual] = useState(false);
    
    return (
        <main className="header">
            <div style={{alignItems:'center',display:'inline-flex'}}>
                <img className ="logoimg" src={Logo} alt='로고'></img>
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