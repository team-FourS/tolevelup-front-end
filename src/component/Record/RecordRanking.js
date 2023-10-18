import React, { useState, useEffect } from 'react';
import '../../css/record/RecordRanking.css';

const RecordRanking = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

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
          <option value="">Select Year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select className="dropdown" value={selectedMonth} onChange={handleMonthChange} disabled={!selectedYear}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="square-box">
        {/* 네모칸 안에 들어갈 내용을 추가하세요 */}
      </div>

      {/* 여기에 Record 데이터를 표시하는 컴포넌트 추가 */}
    </div>
  );
};

export default RecordRanking;