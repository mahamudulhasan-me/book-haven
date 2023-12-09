// useTodoProvider.ts
import ToDoContext from "@/context/TodoContext";
import { useContext } from "react";

const useTodoProvider = () => {
  const contextValue = useContext(ToDoContext);

  const todos = contextValue?.todos || [];
  const addTodo = contextValue?.addTodo || (() => {});

  return { todos, addTodo };
};

export default useTodoProvider;
