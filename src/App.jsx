import { useState } from 'react'
import './styles.css'
export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit() {
    e.preventDefault()
    setTodos(currentTodos){
      return[
        ...currentTodos, {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
      ]
    }
  }
  return <>
  <form onSubmit={handleSubmit} action="post" className='new-item-form'>
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
    <li>
      <label htmlFor="item">
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
}