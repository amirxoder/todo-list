import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function Form({ setInput, input, todos, setTodos }) {

    const inputChangeHandler = event => {
        setInput(event.target.value)
    }

    const submitTodosHandler = event => {
        event.preventDefault();
        setTodos([...todos, {
            text: input,
            completed: false,
            id: Math.random() * 99999
        }])
        setInput('')
    }

    return (
        <form onSubmit={submitTodosHandler} className='form'>
            <div className='input-box'>
                <input onChange={inputChangeHandler} type='text' className='todo-input' value={input} />
                <button disabled={todos.text} type='submit' className='todo-button'>
                    <AddIcon />
                </button>
            </div>
            {/* <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div> */}
        </form>
    )
}

export default Form
