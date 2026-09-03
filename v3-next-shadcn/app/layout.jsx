import { TodoProvider } from "@/context/TodoContext"
import "./globals.css"

export const metadata = {
  title: "Todo App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center px-6 py-12">
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  )
}