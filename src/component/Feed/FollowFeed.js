import React, { useState }  from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import AllFeed from "./AllFeed";
import "../../css/feed/AllFeed.css";
import {Routes, Route, Link} from "react-router-dom";
import user from '../../img/user.png';

import {BiSearchAlt2} from "react-icons/bi";
import {HiHeart} from "react-icons/hi";
import {LiaCommentSolid} from "react-icons/lia";

const FollowFeed = () => {
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
              <h4> Lv2. 여기는 팔로우 </h4> 
                <p className="oneLine">팔로팔로 미!!</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 운동 | 줄넘기 200회 하기 </label> <br/>
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
              <h4> Lv4. 베스킨라빈스 </h4> 
                <p className="oneLine">이번 한 달도 홧팅하자~</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 문화생활 | 로맨스 영화 1편 보기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 취미 | 뜨개질 하기 </label>
            </div>
            <HiHeart className="heart_icon"/>
            <LiaCommentSolid className="comment_icon"/>
          </div>
        </div>
        
        <div className="feedBox03">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv4. 엘사와 안나 </h4> 
                <p className="oneLine">렛츠고 렛잇고!!</p>
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
              <h4> Lv1. 천사맛 쿠키 </h4> 
                <p className="oneLine">화이팅~! 해야지~</p>
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
export default FollowFeed;