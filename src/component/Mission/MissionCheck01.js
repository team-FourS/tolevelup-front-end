import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import '../../css/mission/MissionCheck.css';
import LoadSpinner from '../Spinner/SpinnerMission';

function TodoItem({ todo, index, toggleComplete }) {
  const textStyle = {
    color: todo.completed === "DAILY_COMPLETE" ? 'rgb(204, 204, 204)' : 'black',
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

function MissionCheck01() {
  const [todos1, setTodos1] = useState([]);
  const [missionExercise1, setmissionExercise1] = useState([]);
  const [missionExercise2, setmissionExercise2] = useState([]);
  const [missionExercise3, setmissionExercise3] = useState([]);

  //스피너
  const [Loading,setLoading] = useState(true);

  useEffect(() => {

    const savedTodos = JSON.parse(localStorage.getItem('status')) || [];
    setTodos1(savedTodos);

    // 서버의 미션 정보 가져오기
    axiosInstance.get('api/v1/missions/themes/1')
      .then((res) => {
        console.log(res.data);

        setmissionExercise1(res.data.result[0].missionId);
        setmissionExercise2(res.data.result[1].missionId);
        setmissionExercise3(res.data.result[2].missionId);


        // 서버에서 가져온 미션 정보를 하나의 항목으로 설정
        const missionData = res.data.result;
        const updatedTodos = missionData.map((mission, index) => ({
          text: mission.content,
          completed: savedTodos[index] ? savedTodos[index].completed : mission.checked === 'DAILY_COMPLETE',
        }));
  
          setTodos1(updatedTodos);
           //스피너
          setLoading(false);
        })
        .catch((error) => {
          console.log('Failed to fetch user info:', error);
          setLoading(true);
        });
        
    }, []);
  

    const toggleComplete = (index, currentStatus) => {
      const updatedTodos = todos1.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            completed: !currentStatus, // 현재 상태의 반대로 설정
          };
        }
        return todo;
      });
    
      setTodos1(updatedTodos);
    
      // 변경된 상태를 localStorage에 저장
      localStorage.setItem('missionStatus', JSON.stringify(updatedTodos));
    
      let missionId;
      if (index === 0) {
        missionId = missionExercise1;
      } else if (index === 1) {
        missionId = missionExercise2;
      } else if (index === 2) {
        missionId = missionExercise3;
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
        <button className="btnMissionCheck">운동</button>
        {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
        <div className="missionList">
          <ul>
            {todos1.map((todo, index) => (
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

export default MissionCheck01;