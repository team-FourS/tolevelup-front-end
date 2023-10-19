import React, { useState, useEffect } from 'react';
import axiosInstance from "../../axiosConfig";
import "../../css/record/RecordRanking.css"

const RecordRanking = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totalRank, setTotalRank] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const startYear = 2021;

    const yearList = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);
    setYears(yearList);

    const monthList =
      selectedYear === currentYear.toString()
        ? Array.from({ length: currentMonth }, (_, index) => index + 1)
        : Array.from({ length: 12 }, (_, index) => index + 1);

    setMonths(monthList);
  }, [selectedYear]);

  useEffect(() => {
    const fetchTotalRank = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/users/rank?year=${selectedYear}&month=${selectedMonth}`);
        const { rankList } = response.data.result;

        if (rankList.length > 0) {
          const totalRankData = rankList[0];
          setTotalRank(totalRankData.rank);
        } else {
          console.log('No data found for total rank.');
        }
      } catch (error) {
        console.error('Error fetching total rank:', error);
      }
    };

    if (selectedYear && selectedMonth) {
      fetchTotalRank();
    }
  }, [selectedYear, selectedMonth]);

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);

    const currentMonth = new Date().getMonth() + 1;
    const monthList =
      selectedYear === new Date().getFullYear().toString()
        ? Array.from({ length: currentMonth }, (_, index) => index + 1)
        : Array.from({ length: 12 }, (_, index) => index + 1);

    setMonths(monthList);
    setSelectedMonth('');
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
        <p className="rank_totalRank"> 전체 랭킹 : {totalRank ? `${totalRank}위` : ' - '}</p>
        <div className="ExerciseRank">
          <p className="rank_theme">운동</p>
          <p className="rank_count">n위</p>
        </div>

        <div className="EatRank">
          <p className="rank_theme">식습관</p>
          <p className="rank_count">n위</p>
        </div>

        <div className="CultureRank">
          <p className="rank_theme">문화생활</p>
          <p className="rank_count">n위</p>
        </div>

        <div className="HobbyRank">
          <p className="rank_theme">취미</p>
          <p className="rank_count">n위</p>
        </div>
      </div>
    </div>
  );
};

export default RecordRanking;