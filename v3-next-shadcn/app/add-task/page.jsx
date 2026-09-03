"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"

import { useTodos } from "@/context/TodoContext"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

export default function AddTask() {
  const { addTodo } = useTodos()
  const router = useRouter()

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data) {
    addTodo(data.title.trim(), data.description.trim())
    router.push("/")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-lg flex-col gap-5"
    >
      <h1 className="text-lg font-semibold">New Task</h1>

      <Controller
        name="title"
        control={control}
        rules={{
          required: "Task title is required",
        }}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="title">
              Task
            </FieldLabel>

            <Input
              {...field}
              id="title"
              type="text"
              placeholder="Enter task title"
              autoFocus
            />

            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="description">
              Description
            </FieldLabel>

            <Textarea
              {...field}
              id="description"
              placeholder="Enter task description"
            />

            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <div className="flex items-center gap-3">
        <Button type="submit">
          Save
        </Button>

        <Link
          href="/"
          className={buttonVariants({ variant: "secondary" })}
        >
          Cancel
        </Link>
      </div>
    </form>
  )
}