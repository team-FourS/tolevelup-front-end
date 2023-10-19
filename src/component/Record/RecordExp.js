import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from "../../axiosConfig";
import "../../css/record/RecordRanking.css"

const RecordExp = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [totalExp, setTotalExp] = useState('');
  const [themeExps, setThemeExps] = useState([]);

  const fetchTotalExp = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/users/exps?year=${selectedYear}&month=${selectedMonth}`);
      const { result } = response.data;
      const total = result.reduce((acc, theme) => acc + theme.expTotal, 0);
      setTotalExp(total);
    } catch (error) {
      console.error('Error fetching total exp:', error);
    }
  }, [selectedYear, selectedMonth]);

  const fetchThemeExps = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/users/exps?year=${selectedYear}&month=${selectedMonth}`);
      const { result } = response.data;
      setThemeExps(result);
    } catch (error) {
      console.error('Error fetching theme exps:', error);
    }
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      fetchTotalExp();
      fetchThemeExps();
    }
  }, [selectedYear, selectedMonth, fetchTotalExp, fetchThemeExps]);

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
      <p className="rank_totalRank"> Total Exp : {totalExp ? `${totalExp}` : ' - '}</p>
        <div className="ExerciseRank">
          <p className="rank_theme">운동</p>
          <p className="rank_count">{getExpForTheme('운동')}</p>
        </div>

        <div className="EatRank">
          <p className="rank_theme">식습관</p>
          <p className="rank_count">{getExpForTheme('식습관')}</p>
        </div>

        <div className="CultureRank">
          <p className="rank_theme">문화생활</p>
          <p className="rank_count">{getExpForTheme('문화')}</p>
        </div>

        <div className="HobbyRank">
          <p className="rank_theme">취미</p>
          <p className="rank_count">{getExpForTheme('취미')}</p>
        </div>
      </div>
    </div>
  );

  function getExpForTheme(themeName) {
    const theme = themeExps.find(theme => theme.themeName === themeName);
    return theme && theme.expTotal !== null ? theme.expTotal : ' - ';
  }
};

export default RecordExp;
