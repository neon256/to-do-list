import React, { useEffect, useState } from 'react'
import ToDoListElement from './to-do-list-element'
import './style.css'

const ToDoList = () => {
    const [value, setValue] = useState('Введите задание')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [])
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    function save(e) {
        e.preventDefault()
        setTodos([...todos, { name: value, completed: false }])

    }
    return (
        <>
            <form className='form__container' onSubmit={save}>
                <input type="text" placeholder={value} onChange={(e) => setValue(e.target.value)} className='input' />
                <button>Добавить</button>
            </form>
            <div className='to_do__container'>
                {todos.map((item, index) => {
                    return <ToDoListElement item={item} index={index + 1} setTodos={setTodos} todos={todos}/>
                })
                }
            </div>
        </>
    )
}

export default ToDoList