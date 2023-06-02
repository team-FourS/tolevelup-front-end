import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import '../css/Mission.css'
import culture from '../img/culture.png';
import exercise from '../img/exercise.png';
import food from '../img/food.png';
import hobby from '../img/hobby.png';
import MissionCheck01 from "./MissionCheck01";
import MissionCheck02 from "./MissionCheck02";
import MissionCheck03 from "./MissionCheck03";
import MissionCheck04 from "./MissionCheck04";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Mission = () => {
    return(
    <main className="layout">
    <Header />
    <Routes>
        <Route path="/MissionCheck01" element={<MissionCheck01 />} />
        <Route path="/MissionCheck02" element={<MissionCheck02 />} />
        <Route path="/MissionCheck03" element={<MissionCheck03 />} />
        <Route path="/MissionCheck04" element={<MissionCheck04 />} />
    </Routes>

    <div className="MissionComponent">
        <div className="missionBlock">
            <p className="missionTitle">데일리 미션</p>
            <Link to="/MissionCheck01">
                <button className="btnMission"> 운동</button>
            </Link>

            <Link to="/MissionCheck02">
            <button className="btnMission">식습관</button>
            </Link>

            <div className="missionImg">
                <img className="mainImg" src={exercise} alt="운동"/>
                <img className="mainImg" src={food} alt="식습관" /> 
            </div>
        </div>

        <div className="missionBlock">
            <p className="missionTitle">위클리 미션</p>
            
            <Link to="/MissionCheck03">
            <button className="btnMission">문화생활</button>
            </Link>

            <Link to="/MissionCheck04">
            <button className="btnMission">취미</button>
            </Link>

            <div className='missionImg'>
                <img className="mainImg" src={culture} alt="문화생활" />
                <img className="mainImg" src={hobby} alt="취미" />
            </div>
        </div>
    </div>
    <Footer/>    
    </main>
    )
    }

    export default Mission;