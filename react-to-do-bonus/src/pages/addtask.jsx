import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styles } from "../styles"

export default function AddTask({ addTodo }) {
  const [title, setTitle] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim() === "") return

    addTodo(title.trim())
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={`${styles.header} border-b border-line pb-2.5`}>New Task</h1>

      <div className={styles.formRow}>
        <label htmlFor="item" className={styles.label}>
          Task
        </label>
        <input
          id="item"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
          className={styles.input}
        />
      </div>

      <button className={styles.btn}>Save</button>
      <Link to="/" className={styles.cancelLink}>
        Cancel
      </Link>
    </form>
  )
}