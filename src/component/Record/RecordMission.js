import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import LoadSpinner from '../Spinner/SpinnerRecord';
import '../../css/record/RecordMission.css';

const RecordMission = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [exerciseCount, setExerciseCount] = useState(0);
  const [eatCount, setEatCount] = useState(0);
  const [cultureCount, setCultureCount] = useState(0);
  const [hobbyCount, setHobbyCount] = useState(0);

  //스피너
  const [Loading,setLoading] = useState(true);

  useEffect(() => {

    // 전체 누적 미션 개수 가져오기
    axiosInstance.get('api/v1/users/missions/counts')
    .then((res) => {
      setTotalCount(res.data.result);
      console.log(res.data);
      //스피너
      setLoading(false);
    })
    .catch((error) => {
      console.log('Failed to fetch user info:', error);
    });

    // 테마 별 누적 미션 개수 가져오기
    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {
      res.data.result.forEach(theme => {
        switch (theme.themeName) {
          case '운동':
            setExerciseCount(theme.completeTotal);
            break;
          case '식습관':
            setEatCount(theme.completeTotal);
            break;
          case '문화':
            setCultureCount(theme.completeTotal);
            break;
          case '취미':
            setHobbyCount(theme.completeTotal);
            break;
          default:
            break;
        }
      });
      console.log(res.data);
    })
    .catch((error) => {
      console.log('기록 정보를 가져오는데 실패했습니다:', error);
    });

  }, []);
      
  return(
    <div>
      {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
      <div>
      <p className="mission_totalCount">누적 미션 수행: {totalCount}개</p>
          <div className="ExerciseCount">
            <p className="mission_theme">운동</p>
            <p className="mission_count">{ exerciseCount }개</p>
          </div>

          <div className="EatCount">
            <p className="mission_theme">식습관</p>
            <p className="mission_count">{ eatCount }개</p>
          </div>

          <div className="CultureCount">
            <p className="mission_theme">문화생활</p>
            <p className="mission_count">{ cultureCount }개</p>
          </div>

          <div className="HoobyCount">
            <p className="mission_theme">취미</p>
            <p className="mission_count">{ hobbyCount }개</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default RecordMission;