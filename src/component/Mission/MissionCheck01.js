import React, { useState } from 'react';
import '../../css/testMissionCheck.css';

function MissionCheck01() {
  const [todos, setTodos] = useState([
    { text: '줄넘기 100회 하기', completed: false },
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
      <button className="btnMissionCheck">운동</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            {todo.completed ? <del>{todo.text}</del> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissionCheck01;