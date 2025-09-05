import { useState } from 'react'
import './styles.css'
export default function App(){
  
  const [todos, setTodos] = useState([])
  
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return <>
  <form onSubmit={handleSubmit} className='new-item-form'>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
      type="text" 
      value={newItem} 
      id='item' 
      onChange={ e => setNewItem(e.target.value)
      } />
    </div>
      <button className='btn'>Add</button>    
  </form>
  <h1 className='header'>Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
      {/* pass an arrow function don't call the function in the button directly */}
    </li>
    })}
    
  </ul>
  </>
}