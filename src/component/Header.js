//import { render } from '@testing-library/react'
import React from 'react';
import '../css/Header.css'
import Logout from './Logout'
import {Routes, Route, Link} from "react-router-dom";
import Logo from '../img/ToLevelUp_logo.png'
import {BiBell} from "react-icons/bi"
import Alarm from './Alarm';

const Header = () => {
    return (
        <>
        <header className="header">
            <Routes>     
                <Route path="/Logout" element={<Logout />} />
                <Route path="/alarm" element={<Alarm />} />
            </Routes>
            <div>
                <main>
                    <img className ="logoimg" src={Logo} alt='로고'></img>
                        <Link to='/alarm'>
                            <BiBell size={20} className='bell'/>
                        </Link>
                        <Link to='/Logout'>               
                            <div className='fontlo' > | 로그아웃</div>
                        </Link>   
    
                    
                </main>
                <hr/>
            </div>
        </header>
        </>
    )
}

export default Header;