import { NextResponse } from "next/server";
import store from "@/lib/todos-store";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const patch = await request.json();

  const todo = store.todos.find((item) => item.id === id);
  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  if (patch.title !== undefined) todo.title = patch.title;
  if (patch.description !== undefined) todo.description = patch.description;
  if (patch.completed !== undefined) todo.completed = patch.completed;

  return NextResponse.json(todo);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  const index = store.todos.findIndex((item) => item.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  const [removed] = store.todos.splice(index, 1);

  return NextResponse.json(removed);
}