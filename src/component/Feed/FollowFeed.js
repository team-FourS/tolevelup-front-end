import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import AllFeed from "./AllFeed";
import "../../css/feed/AllFeed.css";
import { Routes, Route, Link } from "react-router-dom";
import user from "../../img/user.png";

import { HiHeart } from "react-icons/hi";
import { LiaCommentSolid } from "react-icons/lia";

import CommentModal from "../Modal/CommentModal";
import Comment from "../Feed/Comment";

const FollowFeed = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === "/AllFeed");
  const [isFollowActive, setIsFollowActive] = useState(
    location.pathname === "/FollowFeed"
  );
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [comment, setComment] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === "/AllFeed");
    setIsFollowActive(location.pathname === "/FollowFeed");
  }, [location.pathname]);

  const FeedClick = () => {
    setIsActive(true);
    setIsFollowActive(false);
  };

  const FollowFeedClick = () => {
    setIsActive(false);
    setIsFollowActive(true);
  };

  const handleHeartIconClick = () => {
    setIsHeartActive(!isHeartActive);
  };

  return (
    <div className="layout_feed">
      <Header />

      <Routes>
        <Route path="/AllFeed" element={<AllFeed />} />
        <Route path="/FollowFeed" element={<FollowFeed />} />
      </Routes>

      <Link to="/AllFeed">
        <button
          className={`allFeed ${isActive ? "allfeed_active" : ""}`}
          onClick={FeedClick}
        >
          전체
        </button>
      </Link>

      <Link to="/FollowFeed">
        <button
          className={`followFeed ${isFollowActive ? "followfeed_active" : ""}`}
          onClick={FollowFeedClick}
        >
          팔로우 중
        </button>
      </Link>

      <div className="feed_scrollbox">
        <div className="feedBox01">
          <img className="user_profile" src={user} alt="프로필" />
          <div className="feedContent">
            <div className="userInfo">
              <h4> Lv2. 여기는 팔로우 </h4>
              <p className="oneLine">매일을 성실하게!!</p>
            </div>
            <div className="feedChecklist">
              <input type="checkbox" id="btn1" checked={true} />
              <label htmlFor="btn3"> 식습관 | 물 6잔 이상 마시기 </label> <br />
            </div>
            <HiHeart
              className={`heart_icon ${isHeartActive ? "green" : "gray"}`}
              onClick={handleHeartIconClick}
            />
            <LiaCommentSolid
              className="comment_icon"
              onClick={() => setComment(!comment)}
            />
            {comment && (
              <CommentModal closeModal={() => setComment(!CommentModal)}>
                <Comment />
              </CommentModal>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FollowFeed;
