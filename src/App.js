import React from "react";
import {Routes, Route} from "react-router-dom";
import axios from 'axios';

import Mission from "./component/Mission/Mission"
import MissionCheck01 from "./component/Mission/MissionCheck01";
import MissionCheck02 from "./component/Mission/MissionCheck02";
import MissionCheck03 from "./component/Mission/MissionCheck03";
import MissionCheck04 from "./component/Mission/MissionCheck04";

//import Feed from "./component/Feed/Feed"
import AllFeed from "./component/Feed/AllFeed"
import FollowFeed from "./component/Feed/FollowFeed"

import Rank from "./component/Ranking/MainRanking"
import Char from "./component/Character/Character"
import Mypage from "./component/Mypage/Mypage"
import Modify from "./component/Mypage/Modify";

import Login from "./component/Login/Login";
import Logout from "./component/Login/Logout"
import FindID from "./component/Login/FindID"
import FindPassword from "./component/Login/FindPassword"
import Signup from "./component/Login/Signup"

import Edit from "./component/Mypage/Edit"
import Profile from "./component/Mypage/Profile"
import "./App.css"

// GET 요청 보내기
axios.get('http://ec2-44-198-225-181.compute-1.amazonaws.com:8080/api/data')
  .then(response => {
    // 성공적으로 요청을 보내고 응답을 받았을 때 실행되는 코드
    const data = response.data;
    document.getElementById('result').textContent = data;
    console.log(response.data); // 응답 데이터 출력
  })
  .catch(error => {
    // 요청이 실패하거나 오류가 발생했을 때 실행되는 코드
    console.error("오류발생", error);
  });

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
              {/* <Route path="/alarm" element={<Alarm />} /> */}
              {/* <Route path="/modal" element={<Modal />} /> */}
          </Routes>                       
      </div>
    </div>
  )
}

export default App;