import React, { useState, useEffect } from "react";
import SpinnerImg from "../../img/Spinnoneback.gif";
import "../../css/spinner/SpinnerFeedcharComponent.css";

const SpinnerFeedcharComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <div className="spinnerfeedchar_lay">
        <img src={SpinnerImg} alt="로딩" width="10%"/>
      </div>
    );
  }}

export default SpinnerFeedcharComponent;