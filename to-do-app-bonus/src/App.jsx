import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AddTask from "./pages/AddTask"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(current => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(current =>
      current.map(todo => (todo.id === id ? { ...todo, completed } : todo))
    )
  }

  function deleteTodo(id) {
    setTodos(current => current.filter(todo => todo.id !== id))
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        }
      />
      <Route path="/add-task" element={<AddTask addTodo={addTodo} />} />
    </Routes>
  )
}