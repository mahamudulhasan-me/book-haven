"use client";
import TodoContext from "@/context/TodoContext";
import { ReactNode, useState } from "react";

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todoName: string) => {
    setTodos((prev: TodoType[]) => [
      ...prev,
      {
        id: Math.random().toString(),
        name: todoName,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const contextValue: TodoContextType = {
    todos,
    addTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
