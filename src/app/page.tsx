import AllTasks from "@/components/AllTasks";
import CreateTaskForm from "@/components/CreateTaskForm";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center  flex-col">
      <AllTasks />
      <CreateTaskForm />
    </div>
  );
};

export default HomePage;
