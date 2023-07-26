import React from "react";
import {Routes, Route} from "react-router-dom";

import Mission from "./component/Mission"
import MissionCheck01 from "./component/MissionCheck01";
import MissionCheck02 from "./component/MissionCheck02";
import MissionCheck03 from "./component/MissionCheck03";
import MissionCheck04 from "./component/MissionCheck04";

//import Feed from "./component/Feed/Feed"
import AllFeed from "./component/Feed/AllFeed"
import FollowFeed from "./component/Feed/FollowFeed"

import Rank from "./component/Ranking"
import Char from "./component/Character"
import Mypage from "./component/Mypage"
import Modify from "./component/Modify";
import Login from "./component/login";
import Logout from "./component/Logout"
import FindID from "./component/FindID"
import FindPassword from "./component/FindPassword"
import Signup from "./component/signup"
import Edit from "./component/Edit"

import Profile from "./component/Profile"
import Alarm from "./component/Alarm"

import "./App.css"

function App() {
  return (
      <div className="App">
        <div>        
          <Routes className="layout">
          {/* 어떤 컴퍼넌트를 매핑해 줄  */}
            
              <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Logout" element={<Logout />} />
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
              <Route path="/char" element={<Char />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/Modify" element={<Modify />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/alarm" element={<Alarm />} />
          </Routes>                        
      </div>
    </div>
  )
}

export default App;