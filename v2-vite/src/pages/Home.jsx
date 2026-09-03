import { Link } from "react-router-dom"
import { styles } from "../styles"

export default function Home({ todos, toggleTodo, deleteTodo }) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h1 className={styles.header}>Todo List</h1>
        <Link to="/add-task" className={`${styles.btn} ${styles.btnSmall}`}>
          Add Task
        </Link>
      </div>

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
    </section>
  )
}