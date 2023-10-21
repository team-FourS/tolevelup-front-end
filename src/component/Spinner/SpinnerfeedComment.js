import React, { useState, useEffect } from "react";
import SpinnerImg from "../../img/Spin.gif";
import "../../css/spinner/SpinnerfeedComment.css";

const SpinnerfeedComment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3초 후에 isLoading 상태를 false로 변경하여 스피너를 숨깁니다.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3초로 변경

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    // 로딩 중일 때 스피너를 표시
    return (
      <div className="spinner_feed_comment">
        <div className="arrayloadging">
        <img src={SpinnerImg} alt="로딩" width="10%"/>
        <p className="loading_comment">코멘트를 불러오는중..</p>
        </div>
      </div>
    );
  }
}

export default SpinnerfeedComment;