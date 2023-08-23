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
import { FaCheck } from 'react-icons/fa';

import CommentModal from "./CommentModal";

const AllFeed = () => {
  const [isActive, setIsActive] = useState(false);
  const FeedClick = () => {
    setIsActive(!isActive);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCommentIconClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCommentSubmit = (comment) => {
    handleCloseModal();
  };

  const todoItems = [
    {
      mission: "운동 | 줄넘기 100회 하기",
      user: "Lv2. 여기는 전체",
      content: "매일을 성실하게!!",
      checked: true, //항상 true
    },
    //추가적인 할 일 항목
  ];

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
        {todoItems.map((todo, index) => (
          <div className="feedBox01" key={index}>
            <img className="user_profile" src={user} alt="프로필" />
            <div className="feedContent">
              <div className="userInfo">
                <h4>{todo.user}</h4>
                <p className="oneLine">{todo.content}</p>
              </div>

              <div className="feedChecklist">
                <input
                  type="checkbox"
                  id={`btn1-${index}`}
                  checked={todo.checked}
                />
                <label htmlFor={`btn1-${index}`}>
                  <span className="feed-checkbox">
                    {todo.checked && <FaCheck className="check-icon" style={{ color: 'green' }} />}
                  </span>
                  {todo.mission}
                </label>
                {/* 추가적인 mission 체크박스와 레이블 */}
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
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AllFeed;
