// AllTasks.tsx
import useTodoProvider from "@/hooks/useTodoProvider";

const AllTasks = () => {
  const { todos } = useTodoProvider();

  return (
    <div>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.name}</p>
      ))}
    </div>
  );
};

export default AllTasks;
