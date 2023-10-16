import React, { useState, useEffect } from "react";
import SpinnerImg from "../../img/Spin.gif";
import Mypage from "../Mypage/Mypage";
import "../../css/spinner/SpinnerRank.css";

const SpinnerRank = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMypage, setShowMypage] = useState(false);

  useEffect(() => {
    // 3초 후에 isLoading 상태를 false로 변경하여 스피너를 숨깁니다.
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowMypage(true);
    }, 3000); // 3초로 변경

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    // 로딩 중일 때 스피너를 표시
    return (
      <div className="spinner_lay">
        <img src={SpinnerImg} alt="로딩" width="100px" />
      </div>
    );
  }

  // 로딩이 완료되면 Mypage 컴포넌트를 표시
  if (showMypage) {
    return <Mypage />;
  }
};

export default SpinnerRank;