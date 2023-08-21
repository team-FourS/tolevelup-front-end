import React, { useState } from 'react';
import '../../css/mission/MissionCheck03.css';

function TodoItem({ todo, index, toggleComplete }) {
  const textStyle = {
    color: todo.completed ? 'rgb(204, 204, 204)' : 'black',
  };

  return (
    <label className="checkbox-container3">
      <input
      type="checkbox"
      className="checkbox3"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}/>
        <span className="custom-checkbox3"></span>
        <p className="text-underline">
        <span className="todo-text3" style={textStyle}> {todo.text} </span>
        </p>
    </label>

  );
}

  function MissionCheck03() {
    const [todos, setTodos] = useState([
      { text: '전시회 다녀오기', completed: false } , 
      { text: '영화 한 편 감상하기', completed: true },
      { text: '독서 200페이지 이상하기', completed: false },
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
        <button className="btnMissionCheck3">문화생활</button>
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

export default MissionCheck03;


