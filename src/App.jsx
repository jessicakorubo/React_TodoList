import { useState } from 'react'
import './styles.css'
import TodoForm from './TodoForm';
import { TodoList } from './TodoList';


export default function App() {

  const [todos, setTodos] = useState([]);
  
  function addToDo(title) {
    setTodos(currentTodos => {
      return [
        ...todos,
      {id: crypto.randomUUID(), title, completed: false}, 
      ]
    })
  }


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return{...todo, completed}
        }
        return todo
      })
    })
  }
  

  function DeleteTodo (id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
   <TodoForm onSubmit={addToDo}/>
    <h1>Todo List</h1>
   <TodoList todos={todos} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo}/>
  </>
  )
}

// Todolist says we have a property called todos and the value of this property is 