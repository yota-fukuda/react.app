import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

import shortid from "shortid"

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = value => {
    // 追加処理
    const newTodos = [
      ...todos,
      {
        content: value,
        id: shortid.generate()
      }
    ]
    setTodos(newTodos)
  }

  // 削除機能の追加
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
  <>
    <h1>Todo App</h1>
    <Form addTodo={addTodo} />
    <List deleteTodo={deleteTodo} todos={todos} />
  </>
  )
}

export default App;