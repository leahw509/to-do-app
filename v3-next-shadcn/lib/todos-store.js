const store = globalThis.__todoStore ?? {
  todos: [
    {
      id: "1",
      title: "Learn Next.js App Router",
      description: "Understand layouts, pages and route handlers",
      completed: false,
    },
    {
      id: "2",
      title: "Learn TanStack Query",
      description: "useQuery for reads, useMutation for writes",
      completed: false,
    },
  ],
};

globalThis.__todoStore = store;

export default store;
