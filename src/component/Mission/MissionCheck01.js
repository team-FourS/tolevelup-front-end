import React, { useState } from 'react';
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
        onChange={() => toggleComplete(index)}/>
        <span className="custom-checkbox"></span>
        <p className="text-underline">
        <span className="todo-text" style={textStyle}> {todo.text} </span>
        </p>
    </label>

  );
}

  function MissionCheck01() {
    const [todos, setTodos] = useState([
      { text: '줄넘기 100회 하기', completed: false } , 
      { text: '30분 이상 산책하기', completed: true },
      { text: '자기 전 스트레칭하기', completed: false },
    ]);

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


