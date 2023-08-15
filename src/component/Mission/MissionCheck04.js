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
        <span className="todo-text" style={textStyle}> {todo.text} </span>
    </label>

  );
}

  function MissionCheck04() {
    const [todos, setTodos] = useState([
      { text: '다이어리 일기 쓰기', completed: false },
      { text: '오늘 하루를 그림 그려보기', completed: true },
      { text: '뜨개질 배우기', completed: false },
    ]);

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <button className="btnMissionCheck">취미</button>
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
  );
}

export default MissionCheck04;


