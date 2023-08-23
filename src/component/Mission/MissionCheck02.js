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

  function MissionCheck02() {
    const [todos, setTodos] = useState([
      { text: '물 6잔 이상 마시기', completed: false } , 
      { text: '오늘 하루 밀가루 먹지 않기', completed: true },
      { text: '아침 식사 챙겨 먹기', completed: false },
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
        <button className="btnMissionCheck">식습관</button>
        <div className="missionList">
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

export default MissionCheck02;


