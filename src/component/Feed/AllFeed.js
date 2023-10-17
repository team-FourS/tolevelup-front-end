import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig";
import { useLocation } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import FollowFeed from "./FollowFeed";
import "../../css/feed/AllFeed.css";
import { Routes, Route, Link } from "react-router-dom";
import user from "../../img/user.png";

import { HiHeart } from "react-icons/hi";
import { LiaCommentSolid } from "react-icons/lia";

import CommentModal from "../Modal/CommentModal";
import Comment from "../Feed/Comment";

const AllFeed = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === "/AllFeed");
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [comment, setComment] = useState(false);
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("api/v1/feeds");
        setFeedData(response.data.result);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchData();
  }, []);

  const FeedClick = () => {
    setIsActive(true);
  };

  const FollowFeedClick = () => {
    setIsActive(false);
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
          onClick={FeedClick} > 전체 </button>
      </Link>

      <Link to="/FollowFeed">
        <button
          className={`followFeed ${isActive ? "" : "followfeed_active"}`}
          onClick={FollowFeedClick} > 팔로우 중 </button>
      </Link>

      <div className="feed_scrollbox">
        {feedData.map((feedItem, index) => (
          <div key={index} className="feedBox01">
            <img className="user_profile" src={user} alt="프로필" />
            <div className="feedContent">
              <div className="userInfo">
                <h4> Lv{feedItem.userData.level}. {feedItem.userData.name} </h4>
                <p className="oneLine">{feedItem.userData.intro}</p>
              </div>
              <div className="feedChecklist">
                {feedItem.userCompleteMissions.map((mission, missionIndex) => (
                  <div key={missionIndex}>
                  {mission.checked ==="DAILY_COMPLETE" | mission.checked === "WEEKLY_COMPLETE" && (
                    <div>
                      <input
                        type="checkbox"
                        id={`btn${missionIndex}`}
                        checked={true} // checked 속성을 항상 true로 설정
                      />
                      <label htmlFor={`btn${missionIndex}`}>
                        {mission.themeName} | {mission.content}
                      </label>
                      <br />
                    </div>
                  )}
                </div>
                ))}
              </div>
              <HiHeart
                className={`heart_icon ${isHeartActive ? "redfh" : "gray"}`}
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
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllFeed;
