import React, { useState, useEffect } from "react";
import SpinnerFeedImg from "../../img/Spinnoneback.gif";
import "../../css/spinner/SpinnerFeed.css";

const SpinnerMission = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
    }, 10000); // n초로 변경

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    // 로딩 중일 때 스피너를 표시
    return (
      <div>
        <img className="SpinnerFeedImg" src={SpinnerFeedImg} alt="로딩" width="100px"
          style={{ marginLeft:'110px', marginTop: '65px'}}/>
      </div>
    );
  }
};

export default SpinnerMission;