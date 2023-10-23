import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer";
import AllFeed from "./AllFeed";
import "../../css/feed/AllFeed.css";
import { Routes, Route, Link } from "react-router-dom";
import user from "../../img/user.png";
import axiosInstance from "../../axiosConfig";
import { HiHeart } from "react-icons/hi";
import { LiaCommentSolid } from "react-icons/lia";
import CommentModal from "../Modal/CommentModal";
import Comment from "../Feed/Comment";

const FollowFeed = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === "/AllFeed");
  const [isFollowActive, setIsFollowActive] = useState(location.pathname === "/FollowFeed");
  const [comment, setComment] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [commentedUserId, setCommentedUserId] = useState("");
  const [likeStatus, setLikeStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("api/v1/feeds/follow");
        setFeedData(res.data.result);

        const userId = res.data.result.map(item => item.userData.userId);

        if (userId) {
          setUserId(userId);
        }

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
    setIsFollowActive(false);
  };

  const FollowFeedClick = () => {
    setIsActive(false);
    setIsFollowActive(true);
  };

  const handleHeartIconClick = (index) => {
    const newLikeStatus = [...likeStatus];
    newLikeStatus[index] = !newLikeStatus[index];
    setLikeStatus(newLikeStatus);

    const selectedUserId = userId[index];

    if (newLikeStatus[index]) {
      axiosInstance.post(`api/v1/feeds/follow/${selectedUserId}/likes`)
        .then((res) => {
          console.log(res.data);
          setCommentedUserId(selectedUserId);
        })
        .catch((error) => {
          console.log(`Failed to fetch likes for ${selectedUserId}:`, error);
          setCommentedUserId(selectedUserId);
        });
    } else {
      axiosInstance.delete(`api/v1/feeds/follow/${selectedUserId}/likes`)
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
        {feedData.map((followItem, index) => (
          <div key={index} className="feedBox01">
            <img className="user_profile" src={user} alt="프로필" />
            <div className="feedContent">
              <div className="userInfo">
                <h4> Lv{followItem.userData.level}. {followItem.userData.name} </h4>
                <p className="oneLine">{followItem.userData.intro}</p>
              </div>
              <div className="feedChecklist">
                {followItem.userCompleteMissions.map((mission, missionIndex) => (
                  <div key={missionIndex}>
                    {mission.checked === "DAILY_COMPLETE" ||
                    mission.checked === "WEEKLY_COMPLETE" ? (
                      <div>
                        <input
                          type="checkbox"
                          id={`btn${missionIndex}`}
                          checked={true}
                        />
                        <label htmlFor={`btn${missionIndex}`}>
                          {mission.themeName} | {mission.content}
                        </label>
                        <br />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <HiHeart
                className={`heart_icon ${likeStatus[index] ? "redfh" : "gray"}`}
                onClick={() => handleHeartIconClick(index)}
              />
              <LiaCommentSolid
                className="comment_icon"
                onClick={() => {
                  setComment(!comment);
                  setCommentedUserId(userId[index]);
                }}
              />
              {comment && (
                <CommentModal closeModal={() => setComment(!comment)}>
                  <Comment userId={commentedUserId} />
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

export default FollowFeed;
