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
  const [followStatus, setFollowStatus] = useState(feedData.map(() => false));

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

        // 팔로우 상태 초기화
        const newFollowStatus = res.data.result.map(item => item.followStatus);
        setFollowStatus(newFollowStatus);
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

  const handleHeartIconClick = async (index) => {
    const newLikeStatus = [...likeStatus];
    newLikeStatus[index] = !newLikeStatus[index];
    setLikeStatus(newLikeStatus);
  
    const selectedUserId = userId[index];
  
    try {
      // 이미 좋아요를 누른 경우에만 좋아요 취소 요청
      if (newLikeStatus[index]) {
        await axiosInstance.post(`api/v1/feeds/follow/${selectedUserId}/likes`);
      } else {
        await axiosInstance.delete(`api/v1/feeds/follow/${selectedUserId}/likes`);
      }
  
      // 좋아요 개수 다시 가져오기
      const res = await axiosInstance.get("api/v1/feeds/follow");
      const updatedFeedData = res.data.result;
      setFeedData(updatedFeedData);
    } catch (error) {
      console.log(`Failed to update likes for ${selectedUserId}:`, error);
    }
  };

  // 팔로우
  const handleFollowClick = async (index) => {
    const selectedUserId = userId[index];

    try {
      const response = await axiosInstance.post(`api/v1/users/follow/${selectedUserId}`);
      const resultCode = response.data.resultCode;

      if (resultCode === 'SUCCESS') {
        // 팔로우 성공 시, followStatus 업데이트
        const newFollowStatus = [...followStatus];
        newFollowStatus[index] = true;
        setFollowStatus(newFollowStatus);
        console.log(`사용자 ${selectedUserId}를 성공적으로 팔로우했습니다.`);
      } else {
        console.log(`사용자 ${selectedUserId}를 팔로우하는 데 실패했습니다.`);
      }
    } catch (error) {
      console.error(`사용자 ${selectedUserId}를 팔로우하는 데 실패했습니다:`, error);
    }
  };

  // 언팔로우
  const handleUnfollowClick = async (index) => {
    const selectedUserId = userId[index];

    try {
      const response = await axiosInstance.delete(`api/v1/users/follow/${selectedUserId}`);
      const resultCode = response.data.resultCode;

      if (resultCode === 'SUCCESS') {
        // 언팔로우 성공 시, followStatus 업데이트
        const newFollowStatus = [...followStatus];
        newFollowStatus[index] = false;
        setFollowStatus(newFollowStatus);
        console.log(`사용자 ${selectedUserId}의 팔로우를 성공적으로 취소했습니다.`);
      } else {
        console.log(`사용자 ${selectedUserId}의 팔로우를 취소하는 데 실패했습니다.`);
      }
    } catch (error) {
      console.error(`사용자 ${selectedUserId}의 팔로우를 취소하는 데 실패했습니다:`, error);
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
          onClick={FeedClick}>  전체  </button>
      </Link>

      <Link to="/FollowFeed">
        <button
          className={`followFeed ${isFollowActive ? "followfeed_active" : ""}`}
          onClick={FollowFeedClick}>  팔로우 중  </button>
      </Link>

      <div className="feed_scrollbox">
        {feedData.map((followItem, index) => (
          <div key={index} className="feedBox01">
            <img className="user_profile" src={user} alt="프로필" />
            <div className="feedContent">
              <div className="userInfo">
                <h4> Lv{followItem.userData.level}. {followItem.userData.name} </h4>
                <button
                  className={`followButton ${followStatus[index] ? "following" : ""}`}
                  onClick={() => (followStatus[index] ? handleUnfollowClick(index) : handleFollowClick(index))}
                >
                  {followStatus[index] ? "팔로잉" : "팔로우"}
                </button>
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
                          readOnly // checked 속성을 항상 true로 설정
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

              {/* 좋아요 아이콘 */}      
              <HiHeart
                className={`heart_icon ${likeStatus[index] ? "redfh" : "gray"}`}
                onClick={() => handleHeartIconClick(index)}/>
                <span className="likeCount">{followItem.thisLikeCounts}</span>

              {/* 코멘트 아이콘 */} 
              <LiaCommentSolid
                className="comment_icon"
                onClick={() => {
                  setComment(!comment);
                  setCommentedUserId(userId[index]);
                }}/>
                <span className="commentCount">{followItem.thisCommentCounts}</span>
              {comment && (
                <CommentModal closeModal={() => setComment(!CommentModal)}>
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
