import React, { useState, useEffect } from "react";
import SpinnerGreenImg from "../../img/SpinGreen.gif";

const SpinnerMission = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3초 후에 isLoading 상태를 false로 변경하여 스피너를 숨깁니다.
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
        <img className="SpinnerGreenImg" src={SpinnerGreenImg} alt="로딩" width="12%"
          style={{ marginLeft:'330px', marginTop: '150px'}}/>
      </div>
    );
  }

};

export default SpinnerMission;