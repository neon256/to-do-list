import React from 'react'
import './style.css'

const ToDoListElement = ({ item, index, setTodos, todos }) => {
  function completed(){
    setTodos(todos.filter(todo => todo.name !== item.name));
    const updated = todos.map(todo => todo.name === item.name ? {...todo, completed: !todo.completed} : todo);
    setTodos(updated)
  }
  return (
    <div className={`card__container ${item.completed == true ? 'active' : ''}`}>
      <section className='card__info'>
        <p>{`${index}.`}</p>
        <p className='card__title'>{item.name}</p>
      </section>
      <button className='card__button' onClick={completed}>Выполнено</button>
    </div>
  )
}

export default ToDoListElement