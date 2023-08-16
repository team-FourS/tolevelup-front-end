import React, { useState }  from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import FollowFeed from "./FollowFeed";
import "../../css/feed/AllFeed.css";
import {Routes, Route, Link} from "react-router-dom";
import user from '../../img/user.png';

import {BiSearchAlt2} from "react-icons/bi";
import {HiHeart} from "react-icons/hi";
import {LiaCommentSolid} from "react-icons/lia";

const AllFeed = () => {
  const [isActive, setIsActive] = useState(false);

  const FeedClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="layout_feed">
      <Header/>     
      <Routes>
        <Route path="/AllFeed" element={<AllFeed />} />
        <Route path="/FollowFeed" element={<FollowFeed />} />
      </Routes>
      
        <Link to ="/AllFeed">
          <button
          className={`allFeed ${isActive ? 'allfeed_active' : ''}`}
          onClick={FeedClick}> 전체 </button>
        </Link>


        <Link to ="/FollowFeed">
        <button
          className={`followFeed ${isActive ? 'followfeed_active' : ''}`}
          onClick={FeedClick}> 팔로우 중 </button>
        </Link>

        <label className="searching">
          <input className="searchBox"
            type="text" placeholder="닉네임을 입력해주세요.."             
          required />
            <BiSearchAlt2 />
        </label>

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
            <HiHeart className="heart_icon"/>
            <LiaCommentSolid className="comment_icon"/>
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
            <HiHeart className="heart_icon"/>
            <LiaCommentSolid className="comment_icon"/>
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
            <HiHeart className="heart_icon"/>
            <LiaCommentSolid className="comment_icon"/>
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
            <HiHeart className="heart_icon"/>
            <LiaCommentSolid className="comment_icon"/>
          </div>
        </div>

      </div>
      <Footer/>
    </div>  
  );
}
export default AllFeed;