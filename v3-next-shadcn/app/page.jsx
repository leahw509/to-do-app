"use client"

import Link from "next/link"
import { useTodos } from "@/context/TodoContext"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  const { todos, toggleTodo, deleteTodo } = useTodos()

  return (
    <section className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-3">
        <h1 className="text-lg font-semibold">Todo List</h1>
        <Button size="sm" render={<Link href="/add-task" />}>
          Add Task
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Done</TableHead>
            <TableHead>Task</TableHead>
            <TableHead className="w-24 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                className="py-8 text-center text-muted-foreground"
              >
                No Todos
              </TableCell>
            </TableRow>
          )}

          {todos.map(todo => (
            <TableRow key={todo.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
              </TableCell>

              <TableCell
                className={
                  todo.completed ? "text-muted-foreground line-through" : ""
                }
              >
                {todo.title}
              </TableCell>

              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}