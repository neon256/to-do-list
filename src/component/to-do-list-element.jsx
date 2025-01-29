import React from 'react'
import './style.css'

const ToDoListElement = ({ item, index, setTodos, todos }) => {
  function completed(){
    setTodos(todos.filter(todo => todo.name !== item.name));
    const updated = todos.map(todo => todo.name === item.name ? {...todo, completed: !todo.completed} : todo);
    setTodos(updated)
  }
  function todosDelete(){
    const updated = todos.filter(todo => todo.name !== item.name);
    setTodos(updated)
  }
  return (
    <div className={`card__container ${item.completed == true ? 'active' : ''}`}>
      <section className='card__info'>
        <p>{`${index}.`}</p>
        <p className='card__title'>{item.name}</p>
      </section>
      <div className='card__button__container'>
        <button className={`card__button ${item.completed == true ? 'active__button' : ''}`} onClick={completed}>{item.completed == true? "Отменить" : 'Выполнено'}</button>
        <button className={`card__delete__button`} onClick={todosDelete}>Удалить</button>  
      </div>
    </div>
  )
}

export default ToDoListElement