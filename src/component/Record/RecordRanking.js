import React, { useState, useEffect } from 'react';
import axiosInstance from "../../axiosConfig";
import "../../css/record/RecordRanking.css"

const RecordRanking = () => {
  const [years, setYears] = useState([]); // 연도 상태 추가
  const [selectedYear, setSelectedYear] = useState('');
  const [months, setMonths] = useState([]); // 월 상태 추가
  const [selectedMonth, setSelectedMonth] = useState('');
  const [userId, setUserId] = useState(null);
  const [totalRank, setTotalRank] = useState(null); // null로 초기화
  const [themeRanks, setThemeRanks] = useState({
    1: null, // 운동
    2: null, // 식습관
    3: null, // 문화생활
    4: null, // 취미
  });

  useEffect(() => {
    axiosInstance
      .get('api/v1/users/my')
      .then((res) => {
        const loggedInUserId = res.data.result.userData.id;
        console.log(`Logged-in User ID: ${loggedInUserId}`);
        setUserId(loggedInUserId);
      })
      .catch((error) => {
        console.log('Failed to fetch user data:', error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const startYear = 2021;

    const yearList = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);
    setYears(yearList);
  }, []); 

  useEffect(() => {
    if (selectedYear) {
      const currentMonth = selectedYear === new Date().getFullYear().toString()
        ? new Date().getMonth() + 1
        : 12;

      const monthList = Array.from({ length: currentMonth }, (_, index) => index + 1);
      setMonths(monthList);
      setSelectedMonth('');
    }
  }, [selectedYear]);

  useEffect(() => {
    if (userId && selectedYear && selectedMonth) {
      axiosInstance
        .get(`api/v1/users/rank?year=${selectedYear}&month=${selectedMonth}&userId=${userId}`)
        .then((rankRes) => {
          const userRank = rankRes.data.result.rankList.find(item => item.userData.userId === userId);
          if (userRank) {
            console.log('유저 랭킹:', userRank.rank);
            setTotalRank(userRank.rank);
          } else {
            setTotalRank(null);
          }
        })
        .catch((error) => {
          console.log('Failed to fetch total rank:', error);
          setTotalRank(null);
        });

      const fetchThemeRank = async (themeId) => {
        try {
          const themeRankRes = await axiosInstance.get(`api/v1/users/rank/${themeId}?year=${selectedYear}&month=${selectedMonth}`);
          const themeRankDataList = themeRankRes.data.result.themeRankDataList || [];
          setThemeRanks((prevThemeRanks) => ({
            ...prevThemeRanks,
            [themeId]: themeRankDataList,
          }));
        } catch (error) {
          console.log(`Failed to fetch theme rank for ${themeId}:`, error);
          setThemeRanks((prevThemeRanks) => ({
            ...prevThemeRanks,
            [themeId]: [], // 빈 배열로 설정
          }));
        }
      };

      fetchThemeRank(1); // 운동
      fetchThemeRank(2); // 식습관
      fetchThemeRank(3); // 문화생활
      fetchThemeRank(4); // 취미
    }
  }, [userId, selectedYear, selectedMonth]);

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="record-ranking-container">
      <div className="dropdown-container">
        <select className="dropdown" value={selectedYear} onChange={handleYearChange}>
          <option value=""> 연도  </option>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select className="dropdown" value={selectedMonth} onChange={handleMonthChange} disabled={!selectedYear}>
          <option value=""> 월  </option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div>
        {/* 전체 랭킹 */}
        <p className="rank_totalRank"> 
          전체 랭킹 : {selectedYear && selectedMonth ? (totalRank !== null ? `${totalRank}위` : '-') : '-'}
        </p>

        {/* 테마 랭킹 */}
        <div className="ExerciseRank">
          <p className="rank_theme">운동</p>
          {themeRanks[1] !== null &&
            themeRanks[1]
              .filter(rankData => rankData.userData.userId === userId)
              .map((rankData, index) => (
                <p key={index} className="rank_count">{rankData.rank !== null ? `${rankData.rank}위` : '-'}</p>
              ))}
          {themeRanks[1] === null && <p className="rank_count">-</p>}
        </div>

        <div className="EatRank">
          <p className="rank_theme">식습관</p>
          {themeRanks[2] !== null &&
            themeRanks[2]
              .filter(rankData => rankData.userData.userId === userId)
              .map((rankData, index) => (
                <p key={index} className="rank_count">{rankData.rank !== null ? `${rankData.rank}위` : '-'}</p>
              ))}
          {themeRanks[2] === null && <p className="rank_count">-</p>}
        </div>

        <div className="CultureRank">
          <p className="rank_theme">문화생활</p>
          {themeRanks[3] !== null &&
            themeRanks[3]
              .filter(rankData => rankData.userData.userId === userId)
              .map((rankData, index) => (
                <p key={index} className="rank_count">{rankData.rank !== null ? `${rankData.rank}위` : '-'}</p>
              ))}
          {themeRanks[3] === null && <p className="rank_count">-</p>}
        </div>

        <div className="HobbyRank">
          <p className="rank_theme">취미</p>
          {themeRanks[4] !== null &&
            themeRanks[4]
              .filter(rankData => rankData.userData.userId === userId)
              .map((rankData, index) => (
                <p key={index} className="rank_count">{rankData.rank !== null ? `${rankData.rank}위` : '-'}</p>
              ))}
          {themeRanks[4] === null && <p className="rank_count">-</p>}
        </div>
      </div>
    </div>
  );
};

export default RecordRanking;
