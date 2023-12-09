"use client";
import { createContext } from "react";

const ToDoContext = createContext<TodoContextType | null>(null);

export default ToDoContext;
