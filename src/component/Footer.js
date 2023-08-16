import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";

import { HiSquares2X2 } from "react-icons/hi2";
import { BsClipboard2Check } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="footer">
      {/* <nav className="footer01"> */}
        <NavLink className={'icon'} 
          to="/mission"
          ClassName="active"
          isActive={() => activeTab === "mission"}
          onClick={() => handleTabClick("mission")}
        >
          <HiSquares2X2 size={30} className="icon" style={{marginLeft:'30px',marginRight:'30px'}}/>
        </NavLink>
        <NavLink
          to="/Allfeed"
          ClassName="active"
          isActive={() => activeTab === "allfeed"}
          onClick={() => handleTabClick("allfeed")}
        >
          <BsClipboard2Check size={30} className="icon" style={{marginLeft:'30px',marginRight:'30px'}}/>
        </NavLink>
        <NavLink
          to="/rank"
          ClassName="active"
          isActive={() => activeTab === "rank"}
          onClick={() => handleTabClick("rank")}
        >
          <BiTrophy size={30} className="icon" style={{marginLeft:'30px',marginRight:'30px'}}/>
        </NavLink>
        <NavLink
          to="/char"
          ClassName="active"
          isActive={() => activeTab === "char"}
          onClick={() => handleTabClick("char")}
        >
          <AiFillAliwangwang size={30} className="icon" style={{marginLeft:'30px',marginRight:'30px'}}/>
        </NavLink>
       
        <NavLink
          to="/mypage"
          ClassName="active"
          isActive={() => activeTab === "mypage"}
          onClick={() => handleTabClick("mypage")}
        >
             <div className="icon-wrapper">
          <AiOutlineUser size={30} className="icon" style={{marginLeft:'30px',marginRight:'30px'}}/></div>
        </NavLink>
        </div>

  );
};

export default Footer;