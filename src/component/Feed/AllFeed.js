import React, { useState } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import FollowFeed from "./FollowFeed";
import "../../css/feed/AllFeed.css";
import { Routes, Route, Link } from "react-router-dom";
import user from "../../img/user.png";

import { BiSearchAlt2 } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { LiaCommentSolid } from "react-icons/lia";

import CommentModal from "./CommentModal";

const AllFeed = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 각 체크박스의 상태를 useState를 사용하여 관리 / ***오류 수정 예졍***
  const [checkbox1, setCheckbox1] = useState(true);

  const FeedClick = () => {
    setIsActive(!isActive);
  };

  const handleCommentIconClick = () => {
    setIsModalOpen(!isModalOpen); // 댓글 창 열고 닫기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentSubmit = (comment) => { //댓글 창 닫기
    handleCloseModal();
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
          <div className="input-container">
            <input className="searchBox"
              type="text" placeholder="닉네임을 입력해주세요"             
            required />
              <BiSearchAlt2 className="search-icon"/>
          </div>    
        </label>

        <div className="feed_scrollbox">

        <div className="feedBox01">
          <img className="user_profile" src={user} alt="프로필" />
          <div className="feedContent">
            <div className="userInfo">
              <h4> Lv2. 여기는 전체 </h4>
              <p className="oneLine">매일을 성실하게!!</p>
            </div>
            <div className="feedChecklist">          
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 식습관 | 물 6잔 이상 마시기 </label> <br/>
            </div>
          <HiHeart className="heart_icon" />
          <LiaCommentSolid
            className="comment_icon"
            onClick={handleCommentIconClick}
          />
          {isModalOpen && (
            <CommentModal
              onClose={handleCloseModal}
              onSubmit={handleCommentSubmit}
            />
          )}
        </div>
      </div>

      <div className="feedBox01">
          <img className="user_profile" src={user} alt="프로필" />
          <div className="feedContent">
            <div className="userInfo">
              <h4> Lv4. 하치와레 </h4>
              <p className="oneLine">레벨업!!</p>
            </div>

            <div className="feedChecklist">          
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 운동 | 줄넘기 100회 하기 </label> <br/>
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 취미 | 캠핑 여행 다녀오기 </label> <br/>
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 취미 | 오늘 하루 이상 일기에 담기 </label>
            </div>
          <HiHeart className="heart_icon" />
          <LiaCommentSolid
            className="comment_icon"
            onClick={handleCommentIconClick}
          />
          {isModalOpen && (
            <CommentModal
              onClose={handleCloseModal}
              onSubmit={handleCommentSubmit}
            />
          )}
        </div>
      </div>

      <div className="feedBox01">
          <img className="user_profile" src={user} alt="프로필" />
          <div className="feedContent">
            <div className="userInfo">
              <h4> Lv2. 짱구와 흰둥이 </h4>
              <p className="oneLine">화이팅~ 해야지!</p>
            </div>
            <div className="feedChecklist">          
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 문화생활 | 로맨스 영화 1편 보기 </label> <br/>
            <input type="checkbox" id="btn1"  checked={checkbox1} />
              <label htmlFor="btn3"> 취미 | 뜨개질 하기 </label>
            </div>

          <HiHeart className="heart_icon" />
          <LiaCommentSolid
            className="comment_icon"
            onClick={handleCommentIconClick}
          />
          {isModalOpen && (
            <CommentModal
              onClose={handleCloseModal}
              onSubmit={handleCommentSubmit}
            />
          )}
        </div>
      </div>

      </div>
      <Footer/>
    </div>  
  );
}
export default AllFeed;