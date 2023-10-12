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

  function MissionCheck03() {
  const [todos3, setTodos3] = useState([]);
  const [missionCulture1, setmissionCulture1] = useState('');
  const [missionCulture2, setmissionCulture2] = useState('');
  const [missionCulture3, setmissionCulture3] = useState('');
  
  //스피너
  const [Loading,setLoading] = useState(true);
  
  useEffect(() => {
    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions/themes/3')
      .then((res) => {
        console.log(res.data);

        setmissionCulture1(res.data.result[0].content);
        setmissionCulture2(res.data.result[1].content);
        setmissionCulture3(res.data.result[2].content);
        // console.log(res.data.result.dailyMissions[0].content);

        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
        setTodos3([
          { text: missionCulture1, completed: false },
          { text: missionCulture2, completed: false },
          { text: missionCulture3, completed: false },
        ]);
         //스피너
        setLoading(false);
      })
      .catch((error) => {
        console.log('Failed to fetch user info:', error);
      });
  }, [missionCulture1,missionCulture2,missionCulture3,]);

  const toggleComplete = (index) => {
    const updatedTodos = todos3.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos3(updatedTodos);
  };

  return (
    <div>
      <div className="checklist-border">
        <button className="btnMissionCheck">문화생활</button>
        {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
        <div className="missionList3">
          <ul>
            {todos3.map((todo, index) => (
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

export default MissionCheck03;


