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
  const [comment, setComment] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [userId,setuserId] = useState(null);
  const [commentedUserId, setCommentedUserId] = useState("");
  const [likeStatus, setLikeStatus] = useState(feedData.map(() => false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("api/v1/feeds");
        setFeedData(res.data.result);
        
        console.log(res.data);

        const userId = res.data.result.map(item => item.userData.userId);
      
      if (userId) {
        setuserId(userId);
      }
      //좋아요 색상유지
      const likeStatus = res.data.result.map(item => item.likeSent);
      setLikeStatus(likeStatus);
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

  const handleHeartIconClick = (index) => {
    const newLikeStatus = [...likeStatus];
  newLikeStatus[index] = !newLikeStatus[index];
  setLikeStatus(newLikeStatus);

  const selectedUserId = userId[index];

  // 이미 좋아요를 누른 경우에만 좋아요 취소 요청을 보냅니다.
  if (newLikeStatus[index]) {
    axiosInstance.post(`api/v1/feeds/${selectedUserId}/likes`)
      .then((res) => {
        console.log(res.data);
        setCommentedUserId(selectedUserId);

      })
      .catch((error) => {
        console.log(`Failed to fetch likes for ${selectedUserId}:`, error);
        setCommentedUserId(selectedUserId);

      });
  } else {
    // 이미 좋아요를 취소한 경우 DELETE 요청을 보냅니다.
    axiosInstance.delete(`api/v1/feeds/${selectedUserId}/likes`)
      .then((res) => {
        console.log(res.data);
        setCommentedUserId(selectedUserId);

      })
      .catch((error) => {
        console.log(`Failed to delete like for ${selectedUserId}:`, error);
      });
  }

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
                        checked={true}
                        readOnly // checked 속성을 항상 true로 설정
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
                className={`heart_icon ${likeStatus[index] ? "redfh" : "gray"}`}
                onClick={() => handleHeartIconClick(index)}
              />
              <LiaCommentSolid
                className="comment_icon"
                onClick={() => {setComment(!comment);
                setCommentedUserId(userId[index]);}}
              />
              {comment && (
                <CommentModal closeModal={() => setComment(!CommentModal)}>
                  <Comment userId={commentedUserId}/>
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