import React from "react";

const RecordRanking = () => {
  return(
  <div>
      <p className="mission_totalCount">이번 달 전체 나의 순위: 위</p>
        <div className="mission_parent01">
          <div className="ExerciseCount">
            <p className="mission_theme">운동</p>
            <p className="mission_count">1위</p>
          </div>

          <div className="EatCount">
            <p className="mission_theme">식습관</p>
            <p className="mission_count">5위</p>
          </div>
        </div>

        <div className="mission_parent02">
          <div className="CultureCount">
            <p className="mission_theme">문화생활</p>
            <p className="mission_count">9위</p>
          </div>

          <div className="HoobyCount">
            <p className="mission_theme">취미</p>
            <p className="mission_count">1위</p>
          </div>
        </div>
    </div>
  );  
}
export default RecordRanking;