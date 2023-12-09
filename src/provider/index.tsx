import { ReactNode } from "react";
import TodoProvider from "./TodoProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return <TodoProvider>{children}</TodoProvider>;
};

export default Providers;
