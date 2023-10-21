import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import { format } from 'date-fns';
import user from '../../img/user.png';
import RankingNum1 from '../../img/medal1.png';
import RankingNum2 from '../../img/medal2.png';
import RankingNum3 from '../../img/medal3.png';
import LoadSpinner from '../Spinner/SpinnerRank';
import "../../css/ranking/Fifth.css";

const RankExercise = () => {

  const currentDate = new Date();

// 원하는 날짜 계산
  const year = format(currentDate, 'yyyy'); // 연도 추출
  const month = format(currentDate, 'MM'); // 월 추출
  //const nextMonth = addMonths(currentDate, 1);// 한 달 더하기
  //Cconst previousMonth = subMonths(currentDate, 1);// 한 달 빼기
  // const formattedDate = format(currentDate, 'yyyy-MM-dd');// 날짜 형식 지정

  // 랭킹 정보를 저장할 state
  const [rankExercise, setrankExercise] = useState([]);  
  
  //스피너
  const [Loading,setLoading] = useState(true);


  useEffect(() => {

    
    const fetchData = async () => {
      try {
        // API 호출
        const res = await axiosInstance.get(`api/v1/users/rank/1?year=${year}&month=${month}`);
        
        // API 호출 성공 시 데이터를 state에 저장
        setrankExercise(res.data.result.themeRankDataList);
        // console.log(res.data.result.themeRankDataList);

        //스피너
        setLoading(false);

      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    };

    fetchData();
  });  

  const getRankingImage = (rank) => {
    if (rank === 1) {
      return RankingNum1;
    } else if (rank === 2) {
      return RankingNum2;
    } else if (rank === 3) {
      return RankingNum3;
    } else {
      return null; // 4등부터는 이미지를 표시하지 않음
    }
  };

    return (
<main className="layout_fifth">
{Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
  <table className="rank_table">
    <tbody >
    <div className="rank_scrollbox">
    <div className="rankingbox">
              {rankExercise.map((rankItem, index2) => (
                <tr key={index2}>
                  <td className="Rank_block">
                    <div className="table_wer2">
                      <div className="rank_block">
                        <div className="rank_locate">
                          <td>
                            {getRankingImage(rankItem.rank) ? (
                              <img className="ranking_number" src={getRankingImage(rankItem.rank)} alt='프로필' />
                            ) : (
                              <h3 className="rank_4">{rankItem.rank}</h3>
                            )}
                          </td>
                          <td>
                            <img className="rank_user_profile" src={user} alt='프로필' />
                          </td>
                          <td>
                            <div className="rank_Info">
                              <h4 className="rank_user_name">{`Lv${rankItem.userData.level}. ${rankItem.userData.name}`}</h4>
                              <h4 className="rank_user_id">{rankItem.userData.userId}</h4>
                            </div>
                          </td>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </div>
  </div>
  </tbody>
  </table>
  )}
</main>          
    );
  }

  export default RankExercise;