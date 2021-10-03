import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ text, todo, setTodos, todos }) {


    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))

    }

    const completedHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return item
        }))


    }
    return (
        <div className='todo-item'>
            <li className={todo.completed ? `completed` : ''} >{text}</li>
            <div className='btns'>
                <button className={todo.completed ? `completed` : ''} onClick={completedHandler} style={{ border: 'none', backgroundColor: 'transparent' }}><CheckIcon className='btn' /></button>
                <button disabled={!text} onClick={deleteHandler} style={{ border: 'none', backgroundColor: 'transparent' }}><DeleteIcon className='btn' /></button>
            </div>
        </div>
    )
}

export default Todo
