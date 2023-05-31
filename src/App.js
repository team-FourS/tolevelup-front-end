import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Mission from "./component/Mission"
import MissionCheck01 from "./component/MissionCheck01";
import MissionCheck02 from "./component/MissionCheck02";
import MissionCheck03 from "./component/MissionCheck03";
import MissionCheck04 from "./component/MissionCheck04";

import Feed from "./component/Feed"
import Rank from "./component/Ranking"
import Char from "./component/Character"
import Mypage from "./component/Mypage"
import Modify from "./component/Modify";
import Header from "./component/Header";


import "./App.css"

import { AiTwotoneShop } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function App() {
  return (

      <div className="App">
        <div>
        <Header />
          <Routes className="layout">
          {/* 어떤 컴퍼넌트를 매핑해 줄 것인가 */}
              <Route path="/" element={<Mission />} />
              
                <Route path="/MissionCheck01" element={<MissionCheck01 />} />
                <Route path="/MissionCheck02" element={<MissionCheck02 />} />
                <Route path="/MissionCheck03" element={<MissionCheck03 />} />
                <Route path="/MissionCheck04" element={<MissionCheck04 />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/char" element={<Char />} />
              <Route path="/mypage" element={<Mypage />} />
                <Route path="/Modify" element={<Modify />} />
          </Routes>


          <nav className="footer">
              <Link  to="/"><AiTwotoneShop size={40} className="icon"/></Link>
              <Link to="/feed"><BsClipboard2Check size={40} className="icon"/></Link>
              <Link to="/rank"><BiTrophy size={40} className="icon"/></Link>
              <Link to="/char"><AiFillAliwangwang size={40} className="icon"/></Link>
              <Link to="/mypage"><AiOutlineUser size={40} className="icon"/></Link>
          </nav>
          
      </div>
    </div>
  )
}

export default App;