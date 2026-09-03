"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTodos } from "@/context/TodoContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddTask() {
  const [title, setTitle] = useState("")
  const { addTodo } = useTodos()
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim() === "") return

    addTodo(title.trim())
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-5">
      <h1 className="text-lg font-semibold">New Task</h1>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="item"
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          Task
        </label>
        <Input
          id="item"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
      </div>

    <div className="flex items-center gap-3">
        <Button type="submit">Save</Button>
        <Button variant="secondary" render={<Link href="/" />}>
            Cancel
        </Button>
    </div>
    </form>
  )
}