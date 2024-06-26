import React from "react";
import {Routes, Route} from "react-router-dom";

import Mission from "./component/Mission/Mission"
import MissionCheck01 from "./component/Mission/MissionCheck01";
import MissionCheck02 from "./component/Mission/MissionCheck02";
import MissionCheck03 from "./component/Mission/MissionCheck03";
import MissionCheck04 from "./component/Mission/MissionCheck04";

import AllFeed from "./component/Feed/AllFeed"
import FollowFeed from "./component/Feed/FollowFeed"

import Rank from "./component/Ranking/MainRanking"
import Character from "./component/Character/Character"
import Mypage from "./component/Mypage/Mypage"
import Modify from "./component/Mypage/Modify";

import Login from "./component/Login/Login";
import FindID from "./component/Login/FindID"
import FindPassword from "./component/Login/FindPassword"
import Signup from "./component/Login/Signup"

import Edit from "./component/Mypage/Edit"

// import Alarm from "./component/Alarm"
// import Modal from "./component/Modal"

import "./App.css"
import PwCheck from "./component/Mypage/PwCheck";

import EditEmail from "./component/Mypage/EditProfile/editEmail";
import EditID from "./component/Mypage/EditProfile/editID";
import EditNickname from "./component/Mypage/EditProfile/editNickname";
import EditOneline from "./component/Mypage/EditProfile/editOneline";
import EditPW from "./component/Mypage/EditProfile/editPW";

import MainRecord from "./component/Record/MainRecord"

function App() {
  return (
      <div className="App">
        <div>        
          <Routes className="layout">
          {/* 어떤 컴퍼넌트를 매핑해 줄  */}
            
              <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/FindID" element={<FindID />} />
                <Route path="/FindPassword" element={<FindPassword />} />
              <Route path="/Mission" element={<Mission />} />
                <Route path="/MissionCheck01" element={<MissionCheck01 />} />
                <Route path="/MissionCheck02" element={<MissionCheck02 />} />
                <Route path="/MissionCheck03" element={<MissionCheck03 />} />
                <Route path="/MissionCheck04" element={<MissionCheck04 />} />
              <Route path="/AllFeed" element={<AllFeed />} />
                <Route path="/FollowFeed" element={<FollowFeed />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/character" element={<Character />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/Modify" element={<Modify />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/pwcheck" element={<PwCheck />} />
              <Route path="/editEmail" element={<EditEmail />} />
              <Route path="/editID" element={<EditID />} />
              <Route path="/editNickname" element={<EditNickname />} />
              <Route path="/editOneline" element={<EditOneline />} />
              <Route path="/editPW" element={<EditPW />} />
              <Route path="/MainRecord" element={<MainRecord/>} />
              {/* <Route path="/alarm" element={<Alarm />} /> */}
              {/* <Route path="/modal" element={<Modal />} /> */}
          </Routes>                       
      </div>
    </div>
  )
}

export default App;