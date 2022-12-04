import React from "react";
import Todo from "./Todo";
import s from './TodoList.module.scss'
const TodoList = (props) => {
    
    return (
<div className={s.todoContainer}>
    <ul className={s.todoList}>
{props.filteredTodos.map((todo) => {
return <Todo completeTodo={props.completeTodo} deleteTodo={props.deleteTodo} key={todo.id} todo={todo}/>
})}
</ul>
</div>
    )
}

export default TodoList