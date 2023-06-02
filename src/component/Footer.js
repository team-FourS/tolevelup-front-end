import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import '../css/Footer.css'
import Mission from "../component/Mission"
import Feed from "../component/Feed"
import Rank from "../component/Ranking"
import Char from "../component/Character"
import Mypage from "../component/Mypage"
import Modify from "../component/Modify";

import { AiTwotoneShop } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
    
    return (
        <div className="footer">
            <Routes className="layout">
                <Route path="/Mission" element={<Mission />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/char" element={<Char />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/Modify" element={<Modify />} />
            </Routes>

            <nav className="footer01">
                <Link to="/mission"><AiTwotoneShop size={40} className="icon"/></Link>
                <Link to="/feed"><BsClipboard2Check size={40} className="icon"/></Link>
                <Link to="/rank"><BiTrophy size={40} className="icon"/></Link>
                <Link to="/char"><AiFillAliwangwang size={40} className="icon"/></Link>
                <Link to="/mypage"><AiOutlineUser size={40} className="icon"/></Link>
            </nav>
        </div>

    )
}
export default Footer;