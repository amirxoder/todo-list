import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos }) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map(todo => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        completed={todo.completed}
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
