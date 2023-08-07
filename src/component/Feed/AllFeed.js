import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import FollowFeed from "./FollowFeed";
import "../../css/AllFeed.css";
import {Routes, Route, Link} from "react-router-dom";
import user from '../../img/user.png';
import {BiSearchAlt2} from "react-icons/bi";
//import { LiaCommentSolid } from "react-icons/lia";

const AllFeed = () => {
  return (
    <div className="layout_feed">
      <Header/>     
      <Routes>
        <Route path="/AllFeed" element={<AllFeed />} />
        <Route path="/FollowFeed" element={<FollowFeed />} />
      </Routes>
      
      <div className="header_feed">
        <Link to ="/AllFeed">
          <h4 className="allFeed">전체 </h4>
        </Link>
        <Link to ="/FollowFeed">
          <h4 className="followFeed">팔로우 중</h4>
        </Link>

        <label className="searching">
          <input className="searchBox"
            type="text" placeholder="닉네임을 입력해주세요.."             
          required />
            <BiSearchAlt2 />
        </label>
      </div>

      <div className="feed_scrollbox">
        <div className="feedBox01">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv2. 여기는 전체 </h4> 
                <p className="oneLine">매일을 성실하게!!</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 운동 | 줄넘기 100회 하기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 취미 | 캠핑 여행 다녀오기 </label> 
            </div>
            {/* <LiaCommentSolid/> */}
          </div>
        </div>
        
        <div className="feedBox02">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv1. 짱구와흰둥이 </h4> 
                <p className="oneLine">하루하루 성실하게!!</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 운동 | 줄넘기 100회 하기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 취미 | 캠핑 여행 다녀오기 </label>
            </div>
          </div>
        </div>
        
        <div className="feedBox03">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv4. 올라프짱 </h4> 
                <p className="oneLine">하루하루 성실하게!!</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 운동 | 줄넘기 100회 하기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 취미 | 캠핑 여행 다녀오기 </label>
            </div>
          </div>
        </div>


        <div className="feedBox04">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv1. 군옥수수맛 </h4> 
                <p className="oneLine">아몬드 존맛탱구리</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 식습관 | 물 6잔 이상 마시기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 취미 | 오늘 하루 이상 일기에 담기 </label>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>  
  );
}
export default AllFeed;