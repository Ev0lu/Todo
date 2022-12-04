import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';


function App() {
  const [todos, setTodos] = useState([
  ])

  const [todo, setTodo] = useState({text:'', completed:false})
  
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  //run once at the start
 
  useEffect(() => {
    getLocalTodos()
  }, [])
  
  useEffect(() => {
   
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
         setFilteredTodos(todos.filter(todo => todo.completed === false));
         break;
       default:
         setFilteredTodos(todos);
         break;
    }
  }
    filterHandler()
    if (todos.length !== 0){
    saveLocalTodos()
    }
  }, [todos, status])


  
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
   }
   const completeTodo = (todo) => {
    setTodos(todos.map((item) => {
    if (item.id === todo.id) {
    return{
      ...item, completed: !item.completed
       }
 
    }
    return item;
    }))
   }
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}
const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]))
  } else {
   let todoLocal = JSON.parse(localStorage.getItem("todos"))
   setTodos(todoLocal)
  }
}

  return (
  
    <div className="App">

      <header>
        <h1>TODO APP</h1>
      </header>
      <section className='main'>
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} setStatus={setStatus}/>
      {todos.length !== 0 ? 
       <div className='todos'>
       <TodoList deleteTodo={deleteTodo} completeTodo={completeTodo} todo={todos} filteredTodos={filteredTodos}/>
       </div>
       :
       <div className='noTodos'>
       <h1>Oooops... you don't have any todos!</h1>
       </div>
      }
  </section>
       <Footer />
    </div>
  );
}

export default App;
