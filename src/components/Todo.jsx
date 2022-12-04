import React from "react";
import s from './Todo.module.scss'
const Todo = (props) => {
    let style = [s.text] 
    if (props.todo.completed == true){
        style.push(s.completed)
    } 
    
    let btnCheckStyle = [s.checkButton] 
    if (props.todo.completed == true){
        btnCheckStyle.push(s.btnCompleted)
    } 
    return (
<div className={s.todo}>
    <div className={s.todo_inner}>
    <div className={s.todo_container}>
<div className={s.id}>
{props.todo.id}.
</div>
<div className={style.join(' ')}>
{props.todo.text}
</div>
<div className={s.deleteButton}>

</div>
</div>
<button className={btnCheckStyle.join(' ')} onClick={()=>{props.completeTodo(props.todo)}}>
        <i className="fas fa-check"></i>
    </button>
<button className={s.buttonDelete} onClick={() => {props.deleteTodo(props.todo)}}> 
<i className="fas fa-trash"></i>
</button>
</div>
</div>

    )
}

export default Todo