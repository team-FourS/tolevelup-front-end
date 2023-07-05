import React from "react";
import {Routes, Route} from "react-router-dom";

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
import Login from "./component/login";
import Logout from "./component/Logout"
import FindID from "./component/FindID"
import Signup from "./component/signup"

import "./App.css"

function App() {
  return (
      <div className="App">
        <div>        
          <Routes className="layout">
          {/* 어떤 컴퍼넌트를 매핑해 줄 것인가 */}
            
              <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="/FindID" element={<FindID />} />
              <Route path="/Mission" element={<Mission />} />
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
      </div>
    </div>
  )
}

export default App;