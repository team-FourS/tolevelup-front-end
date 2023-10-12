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
        onChange={() => toggleComplete(index, todo.completed)}
      />
      <span className="custom-checkbox"></span>
      <p className="text-underline">
        <span className="todo-text" style={textStyle}> {todo.text} </span>
      </p>
    </label>
  );
}

function MissionCheck02() {
  const [todos2, setTodos2] = useState([]);
  const [missionEat1, setmissionEat1] = useState('');
  const [missionEat2, setmissionEat2] = useState('');
  const [missionEat3, setmissionEat3] = useState('');

  useEffect(() => {

    const savedTodos = JSON.parse(localStorage.getItem('missionStatus')) || [];
    setTodos2(savedTodos);

    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions/themes/2')
      .then((res) => {
        console.log(res.data);

        setmissionEat1(res.data.result[0].content);
        setmissionEat2(res.data.result[1].content);
        setmissionEat3(res.data.result[2].content);


        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
          const missionData = res.data.result;
          const updatedTodos = missionData.map((mission, index) => ({
            text: mission.content,
            completed: savedTodos[index] ? savedTodos[index].completed : mission.completed,
          }));
  
          setTodos2(updatedTodos);
        })
        .catch((error) => {
          console.log('Failed to fetch user info:', error);
        });
    }, []);
  

    const toggleComplete = (index) => {
      const updatedTodos = todos2.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
  
      setTodos2(updatedTodos);
  
      // 변경된 상태를 localStorage에 저장
      localStorage.setItem('missionStatus', JSON.stringify(updatedTodos));

      const updatedMission = updatedTodos[index];
    axiosInstance.put('api/v1/missions/2', {
      mission1: missionEat1,
      mission2: missionEat2,
      mission3: missionEat3,
      completed: updatedMission.completed
    })
    .then((res) => {
      // PUT 요청이 성공했을 때 할 일을 추가
      console.log('Mission updated:');
    })
    .catch((error) => {
      console.log('Failed to update mission:', error);
    });
  };

  return (
    <div>
      <div className="checklist-border">
        <button className="btnMissionCheck">식습관</button>
        <div className="missionList">
          <ul>
            {todos2.map((todo, index) => (
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

export default MissionCheck02;