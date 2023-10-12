import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import "../../css/record/RecordMission.css"

const RecordMission = () => {
  const [totalCount, setTotalCount] = useState('');
  // const [exerciseCount, setExerciseCount] = useState([]);
  // const [eatCount, setEatCount] = useState([]);
  // const [cultureCount, setCultureCount] = useState([]);
  // const [hobbyCount, setHobbyCount] = useState([]);

  useEffect(() => {

    // 전체 누적 미션 개수 가져오기
    axiosInstance.get('api/v1/users/missions/counts')
    .then((res) => {

      console.log(res.data);

      const totalData = res.data.result;
      setTotalCount(totalData);
    })

    .catch((error) => {
      console.log('Failed to fetch user info:', error);
    });
  }, []);

    // 테마 별 누적 미션 개수 가져오기
    /*
    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {
      setExerciseCount(res.data.result.themeName);
      console.log(res.data);
    })
    .catch((error) => {
      console.log('Failed to fetch user info:', error);
    });
    */
      
  return(
    <div>
      <p className="mission_totalCount">누적 미션 수행: {totalCount}개</p>
        <div className="mission_parent01">
          <div className="ExerciseCount">
            <p className="mission_theme">운동</p>
            <p className="mission_count">10개</p>
          </div>

          <div className="EatCount">
            <p className="mission_theme">식습관</p>
            <p className="mission_count">10개</p>
          </div>
        </div>

        <div className="mission_parent02">
          <div className="CultureCount">
            <p className="mission_theme">문화생활</p>
            <p className="mission_count">10개</p>
          </div>

          <div className="HoobyCount">
            <p className="mission_theme">취미</p>
            <p className="mission_count">10개</p>
          </div>
        </div>
    </div>
  );
}
export default RecordMission;