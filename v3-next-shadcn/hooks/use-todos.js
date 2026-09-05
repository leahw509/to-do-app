"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "@/lib/api"

export const todoKeys = {
  all: ["todos"],
}

export function useTodos() {
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: fetchTodos,
  })
}

export function useAddTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all })
    },
  })
}

export function useToggleTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all })
    },
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all })
    },
  })
}