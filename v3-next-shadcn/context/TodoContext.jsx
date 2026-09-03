"use client"

import { createContext, useContext, useState } from "react"

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])

  function addTodo(title, description) {
    setTodos(current => [
      ...current,
      {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
      },
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(current =>
      current.filter(todo => todo.id !== id)
    )
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  return useContext(TodoContext)
}