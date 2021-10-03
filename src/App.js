import React, { useState } from 'react';


import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='app'>
      <h1 className='header'>Amir's <span>Todo List</span></h1>
      <Form
        setInput={setInput}
        input={input}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
