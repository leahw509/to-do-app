import { NextResponse } from "next/server";
import store from "@/lib/todos-store";

export async function GET() {
  return NextResponse.json(store.todos);
}

export async function POST(request) {
  const body = await request.json();

  if (!body?.title) {
    return NextResponse.json({ message: "Title is required" }, { status: 400 });
  }

  const todo = {
    id: crypto.randomUUID(),
    title: body.title,
    description: body.description ?? "",
    completed: false,
  };

  store.todos.push(todo);

  return NextResponse.json(todo, { status: 201 });
}