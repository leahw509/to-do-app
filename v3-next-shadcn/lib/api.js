async function request(url, options) {
  const response = await fetch(url, options)

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.message || `Request failed: ${response.status}`)
  }

  return response.json()
}

export function fetchTodos() {
  return request("/api/todos")
}

export function createTodo({ title, description }) {
  return request("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  })
}

export function updateTodo({ id, ...patch }) {
  return request(`/api/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  })
}

export function deleteTodo(id) {
  return request(`/api/todos/${id}`, { method: "DELETE" })
}