import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import '../../css/mission/MissionCheck.css';
import LoadSpinner from '../Spinner/SpinnerMission';

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

  function MissionCheck04() {
  const [todos4, setTodos4] = useState([]);
  const [missionHobby1, setmissionHobby1] = useState('');
  const [missionHobby2, setmissionHobby2] = useState('');

  //스피너
  const [Loading,setLoading] = useState(true);

  useEffect(() => {
    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions/themes/4')
      .then((res) => {
        console.log(res.data);

        setmissionHobby1(res.data.result[0].content);
        setmissionHobby2(res.data.result[1].content);
        // console.log(res.data.result.dailyMissions[0].content);

        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
        setTodos4([
          { text: missionHobby1, completed: false },
          { text: missionHobby2, completed: false }
        ]);
         //스피너
        setLoading(false);
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
        setLoading(true);
      });
  }, [missionHobby1,missionHobby2]);

  const toggleComplete = (index) => {
    const updatedTodos = todos4.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos4(updatedTodos);
  };

  return (
    <div>
      <div className="checklist-border">
        <button className="btnMissionCheck">취미</button>
        {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
        <div className="missionList">
          <ul>
            {todos4.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                toggleComplete={toggleComplete} 
              /> 
            ))} 
          </ul>
        </div>
        )}
      </div>
    </div>
  );
}

export default MissionCheck04;

