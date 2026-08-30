import { useState } from "react"
import "./style.css"

const styles = {
  form: "flex w-full max-w-100 flex-col gap-4",
  formRow: "flex flex-col gap-1.5",
  label: "text-xs tracking-widest text-muted uppercase",
  input:
    "rounded-md border border-line bg-white px-3 py-2.5 text-[0.95rem] text-ink " +
    "outline-none transition focus:border-brand focus:ring-[3px] focus:ring-brand-light",
  btn:
    "cursor-pointer rounded-md bg-brand px-5 py-2 text-sm font-medium text-white " +
    "transition hover:bg-brand-dark",
  header: "mt-6 w-full max-w-100 border-b border-line pb-2.5 text-lg font-semibold text-accent",
  list: "w-full max-w-100 list-none p-0",
  empty: "py-8 text-center text-sm text-muted",
  item: "group flex items-center justify-between gap-4 border-b border-line px-1 py-2.5",
  itemLabel:
    "flex cursor-pointer items-center gap-2.5 text-[0.95rem] " +
    "has-checked:text-muted has-checked:line-through",
  checkbox: "h-4 w-4 cursor-pointer accent-brand",
  deleteBtn:
    "cursor-pointer px-2 py-1 text-xs text-muted opacity-0 transition " +
    "group-hover:opacity-100 hover:text-danger",
}

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    setTodos(current => [
      ...current,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
    setNewItem("")
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
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <label htmlFor="item" className={styles.label}>
            New Item
          </label>
          <input
            id="item"
            type="text"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            className={styles.input}
          />
        </div>
        <button className={styles.btn}>Add</button>
      </form>

      <h1 className={styles.header}>Todo List</h1>

      <ul className={styles.list}>
        {todos.length === 0 && <li className={styles.empty}>No Todos</li>}

        {todos.map(todo => (
          <li key={todo.id} className={styles.item}>
            <label className={styles.itemLabel}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}
                className={styles.checkbox}
              />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className={styles.deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}