import axiosInstance from "../../axiosConfig";
import React, { useState, useEffect } from 'react';
import '../../css/mission/MissionCheck.css';

function TodoItem({ todo, toggleComplete }) {
  const textStyle = {
    color: todo.checked === 'DAILY_COMPLETE' ? 'rgb(204, 204, 204)' : 'black',
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.checked === 'DAILY_COMPLETE'}
        onChange={() => toggleComplete(todo.missionId, todo.checked)}
      />
      <span className="custom-checkbox"></span>
      <p className="text-underline">
        <span className="todo-text" style={textStyle}> {todo.content} </span>
      </p>
    </label>
  );
}

async function fetchMissions() {
  try {
    const response = await axiosInstance.get('api/v1/missions/themes/1');
    return response.data.result;
  } catch (error) {
    console.log('Failed to fetch missions:', error);
    return [];
  }
}

function MissionCheck01() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissionsAndLoadLocalStorage = async () => {
      const serverMissions = await fetchMissions();
      const storedMissions = JSON.parse(localStorage.getItem('missionStatus')) || [];

      // 서버에서 가져온 미션과 로컬 스토리지의 미션을 합치기
      const mergedMissions = serverMissions.map(serverMission => {
        const storedMission = storedMissions.find(m => m.missionId === serverMission.missionId);
        return storedMission ? storedMission : serverMission;
      });

      setMissions(mergedMissions);
    };

    fetchMissionsAndLoadLocalStorage();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  const toggleComplete = (missionId, currentStatus) => {
    const updatedMissions = missions.map((mission) =>
      mission.missionId === missionId
        ? { ...mission, checked: currentStatus === 'DAILY_ONGOING' ? 'DAILY_COMPLETE' : 'DAILY_ONGOING' }
        : mission
    );

    setMissions(updatedMissions);

    // 로컬 스토리지에 미션 상태 저장
    localStorage.setItem('missionStatus', JSON.stringify(updatedMissions));
  };

  return (
    <div>
      <div className="checklist-border">
        <button className="btnMissionCheck">운동</button>
        <div className="missionList">
          <ul>
            {missions.map((mission) => (
              <TodoItem
                key={mission.missionId}
                todo={mission}
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
