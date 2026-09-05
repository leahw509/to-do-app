"use client"

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTodos, useToggleTodo, useDeleteTodo } from "@/hooks/use-todos"

export default function Home() {
  const { data: todos, isPending, isError, error } = useTodos()
  const toggleTodo = useToggleTodo()
  const deleteTodo = useDeleteTodo()

  return (
    <section className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-3">
        <h1 className="text-lg font-semibold">Todo List</h1>

        <Link
          href="/add-task"
          className={buttonVariants({ size: "sm" })}
        >
          Add Task
        </Link>
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
          {isPending && (
            <TableRow>
              <TableCell
                colSpan={3}
                className="py-8 text-center text-muted-foreground"
              >
                Loading todos...
              </TableCell>
            </TableRow>
          )}

          {isError && (
            <TableRow>
              <TableCell
                colSpan={3}
                className="py-8 text-center text-destructive"
              >
                Failed to load todos: {error.message}
              </TableCell>
            </TableRow>
          )}

          {!isPending && !isError && todos.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                className="py-8 text-center text-muted-foreground"
              >
                No Todos
              </TableCell>
            </TableRow>
          )}

          {!isPending &&
            !isError &&
            todos.map(todo => (
              <TableRow key={todo.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e =>
                      toggleTodo.mutate({
                        id: todo.id,
                        completed: e.target.checked,
                      })
                    }
                    className="h-4 w-4 cursor-pointer accent-primary"
                  />
                </TableCell>

                <TableCell>
                  <div
                    className={
                      todo.completed
                        ? "text-muted-foreground line-through"
                        : ""
                    }
                  >
                    <div className="font-medium">
                      {todo.title}
                    </div>

                    {todo.description && (
                      <div className="text-sm text-muted-foreground">
                        {todo.description}
                      </div>
                    )}
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={deleteTodo.isPending}
                    onClick={() => deleteTodo.mutate(todo.id)}
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