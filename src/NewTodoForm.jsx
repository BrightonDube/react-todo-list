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
}