import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import '../../css/mission/MissionCheck.css';

function TodoItem({ todo, index, toggleComplete }) {
  const textStyle = {
    color: todo.completed ? 'rgb(204, 204, 204)' : 'black',
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      <span className="custom-checkbox"></span>
      <p className="text-underline">
        <span className="todo-text" style={textStyle}> {todo.text} </span>
      </p>
    </label>
  );
}

function MissionCheck01() {
  const [todos, setTodos] = useState([]);
  const [missionExercise1, setmissionExercise1] = useState('');
  const [missionExercise2, setmissionExercise2] = useState('');
  const [missionExercise3, setmissionExercise3] = useState('');

  useEffect(() => {
    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions')
      .then((res) => {
        console.log(res.data);

        setmissionExercise1(res.data.result.dailyMissions[0].content);
        setmissionExercise2(res.data.result.dailyMissions[1].content);
        setmissionExercise3(res.data.result.dailyMissions[2].content);
        // console.log(res.data.result.dailyMissions[0].content);

        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
        setTodos([
          { text: missionExercise1, completed: false },
          { text: missionExercise2, completed: false },
          { text: missionExercise3, completed: false },
        ]);
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
      });
  }, [missionExercise1,missionExercise2,missionExercise3,]);

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="checklist-border">
        <button className="btnMissionCheck3">운동</button>
        <div className="missionList3">
        {/* <p className="mission-exercise">{missionexercise}</p> */}
          <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                toggleComplete={toggleComplete} 
              /> 
            ))} 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MissionCheck01;