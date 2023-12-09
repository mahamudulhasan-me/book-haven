export {};

declare global {
  interface TodoType {
    id: string;
    name: string;
    completed: boolean;
    createdAt: Date;
  }

  interface TodoContextType {
    todos: TodoType[];
    addTodo: string;
  }
}
