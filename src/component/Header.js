import React from 'react';
import '../css/Header.css'
// import Logout from './Login/Logout'
import {Link} from "react-router-dom";
import Logo from '../img/ToLevelUp_logo.png'
import {BiBell} from "react-icons/bi"

import { useState } from "react";
import Modal from "./Modal";
import Alarm from "./Modal/Alarm";

const Header = () => {
    const [alarm, setAlarm] = useState(false);
    
    return (
        <main className="header">
            <div style={{alignItems:'center',display:'inline-flex'}}>
                <img className ="logoimg" src={Logo} alt='로고'></img>
                    <BiBell onClick={() => setAlarm(!alarm)} size={20} className='bell'/>
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