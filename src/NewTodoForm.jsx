import { useState } from "react";

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return[
        ...currentTodos, {
          id: crypto.randomUUID(), title: newItem, completed: false
        },
      ]
    })
    setNewItem("")
  }
  return <form onSubmit={handleSubmit} className='new-item-form'>
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
}