import React from "react";
import s from './Form.module.scss'

const Form = ({setTodo, setTodos, setStatus, todo, todos}) => {
   



    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, {...todo, id: todos.length + 1}])
        setTodo({text:'', completed: false})
       }
      
    
      const statusHandler = (e) => {
    setStatus(e.target.value)
      }
    return (

<div className={s.main__inner}>
      <div className={s.todoInput_Container}>

      <input className={s.todoInput}
       placeholder='Write a text'
       onChange={ e => setTodo({...todo, text:e.target.value})}
      value={todo.text}
        >
        </input>
        <div className={s.todoButton_Container}>
        <button className={s.todoButton} type='submit' onClick={addTodo}>Add Todo</button>   
        </div>
        </div>
        <div className={s.select}>
        <select onChange={statusHandler} name="todos" className={s.filterTodo}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      </div>

    )
}

export default Form