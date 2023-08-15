import React, { useState } from "react";
import '../../css/mission/Mission.css'

import culture from '../../img/main-culture.png';
// import exercise from '../../img/yoga-pose.png';
import exercise from '../../img/main-exercise.png';
import eat from '../../img/main-eat.png';
import hobby from '../../img/main-hobby.png';

import MissionModal from "./MissionModal";
import MissionCheck01 from "./MissionCheck01";
import MissionCheck02 from "./MissionCheck02";
import MissionCheck03 from "./MissionCheck03";
import MissionCheck04 from "./MissionCheck04";

import Header from "../Header/Header";
import Footer from "../Footer";

const Mission = () => {
    const [missionHealth, setCheck01] = useState(false);
    const [missionEat, setCheck02] = useState(false);
    const [missionCulture, setCheck03] = useState(false);
    const [missionHobby, setCheck04] = useState(false);
    return(
    <main className="layout_mission">
    <Header/>

    <div className="MissionComponent">
        <div className="missionBlock">
            <p className="missionTitle">데일리 미션</p>
            <span id="missionHealth" onClick={() => setCheck01(!missionHealth)}>
                {missionHealth && (
                    <MissionModal closeModal={() => setCheck01(!missionHealth)}>
                        <MissionCheck01 />
                    </MissionModal>
                )}
                <button className="btnMission"> 운동</button>
            </span>    
            
            <span id="missionEat" onClick={() => setCheck02(!missionEat)}>
                {missionEat && (
                    <MissionModal closeModal={() => setCheck02(!missionEat)}>
                        <MissionCheck02 />
                    </MissionModal>
                )}
                <button className="btnMission">식습관</button>
            </span>

            <div className="missionImg">
                <img className="mainImg" src={exercise} alt="운동"/>
                <img className="mainImg" src={eat} alt="식습관" /> 
            </div>
        </div>

        <div className="missionBlock">
            <p className="missionTitle">위클리</p>
            <span id="missionCulture" onClick={() => setCheck03(!missionCulture)}>
                {missionCulture && (
                    <MissionModal closeModal={() => setCheck03(!missionCulture)}>
                        <MissionCheck03 />
                    </MissionModal>
                )}
                <button className="btnMission">문화생활</button>
            </span>
            
            <span id="missionHobby" onClick={() => setCheck04(!missionHobby)}>
                {missionHobby && (
                    <MissionModal closeModal={() => setCheck04(!missionHobby)}>
                        <MissionCheck04 />
                    </MissionModal>
                )}
                <button className="btnMission">취미</button>
            </span>

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