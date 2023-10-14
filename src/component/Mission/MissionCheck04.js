import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import '../../css/mission/MissionCheck.css';
import LoadSpinner from '../Spinner/SpinnerMission';

function TodoItem({ todo, index, toggleComplete }) {
  const textStyle = {
    color: todo.completed === "WEEKLY_COMPLETE" ? 'rgb(204, 204, 204)' : 'black',
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

function MissionCheck04() {
  const [todos4, setTodos4] = useState([]);
  const [missionHobby1, setmissionHobby1] = useState([]);
  const [missionHobby2, setmissionHobby2] = useState([]);

  //스피너
  const [Loading,setLoading] = useState(true);

  useEffect(() => {

  const savedTodos = JSON.parse(localStorage.getItem('status')) || [];
  setTodos4(savedTodos);

    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions/themes/4')
      .then((res) => {
        console.log(res.data);

        setmissionHobby1(res.data.result[0].missionId);
        setmissionHobby2(res.data.result[1].missionId);


        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
          const missionData = res.data.result;
          const updatedTodos = missionData.map((mission, index) => ({
            text: mission.content,
            completed: savedTodos[index] ? savedTodos[index].completed : mission.checked === 'WEEKLY_COMPLETE',
          }));
  
          setTodos4(updatedTodos);
           //스피너
          setLoading(false);
        })
        .catch((error) => {
          console.log('Failed to fetch user info:', error);
          setLoading(true);
        });
        
    }, []);
  

    const toggleComplete = (index, currentStatus) => {
      const updatedTodos = todos4.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            completed: !currentStatus, // 현재 상태의 반대로 설정
          };
        }
        return todo;
      });
    
      setTodos4(updatedTodos);
    
      // 변경된 상태를 localStorage에 저장
      localStorage.setItem('missionStatus', JSON.stringify(updatedTodos));
    
      let missionId;
      if (index === 0) {
        missionId = missionHobby1;
      } else if (index === 1) {
        missionId = missionHobby2;
      } 
    
      // PUT 요청 보내기
      const updatedMission = updatedTodos[index];
      axiosInstance.put(`api/v1/missions/${missionId}`, {
        completed: updatedMission.completed
      })
        .then((res) => {
          // PUT 요청이 성공했을 때 할 일을 추가
          console.log('Mission updated:',res.data.result);
  
        })
        .catch((error) => {
          console.log('Failed to update mission:', error);
        });
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