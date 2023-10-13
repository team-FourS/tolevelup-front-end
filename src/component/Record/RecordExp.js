import React, { useState } from 'react';
import '../../css/record/RecordExp.css';

const RecordExp = () => {
  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  };

  const handleMonthClick = (index) => {
    setCurrentMonthIndex(index);
  };

  const generateMonthElements = () => {
    return months.map((month, index) => (
      <div
        key={index}
        className={`month ${index === currentMonthIndex ? 'active' : ''}`}
        onClick={() => handleMonthClick(index)}
      >
        {month}
      </div>
    ));
  };

  return (
    <div className="record-exp">
      <div className="month-navigation">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{months[currentMonthIndex]}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar">
        {generateMonthElements()}
      </div>
    </div>
  );
};

export default RecordExp;