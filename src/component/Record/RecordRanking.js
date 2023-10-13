import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import LoadSpinner from '../Spinner/SpinnerRecord';

const RecordRanking = () => {
  const [totalRank, setTotalRank] = useState(0);
  const [exerciseRank, setExerciseRank] = useState(0);
  const [eatRank, setEatRank] = useState(0);
  const [cultureRank, setCultureRank] = useState(0);
  const [hobbyRank, setHobbyRank] = useState(0);

    //스피너
    const [Loading,setLoading] = useState(true);

  useEffect(() => {
    // 전체 랭킹 가져오기
    axiosInstance.get('api/v1/users/exps?year=2023&month=10')
    .then((res) => {
      setTotalRank(res.data.result);
      console.log(res.data);
      //스피너
      setLoading(false);
    })
    .catch((error) => {
      console.log('Failed to fetch user info:', error);
    });
  })
  return(
  <div>
    {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
    <div>
      <p className="mission_totalCount">이번 달 전체 나의 순위 : { totalRank }위</p>
        <div className="mission_parent01">
          <div className="ExerciseCount">
            <p className="mission_theme">운동</p>
            <p className="mission_count">{ exerciseRank }위</p>
          </div>

          <div className="EatCount">
            <p className="mission_theme">식습관</p>
            <p className="mission_count">{ eatRank }위</p>
          </div>
        </div>

        <div className="mission_parent02">
          <div className="CultureCount">
            <p className="mission_theme">문화생활</p>
            <p className="mission_count">{ cultureRank }위</p>
          </div>

          <div className="HoobyCount">
            <p className="mission_theme">취미</p>
            <p className="mission_count">{ hobbyRank }위</p>
          </div>
        </div>
    </div>
    )}
  </div>
  );  
}
export default RecordRanking;