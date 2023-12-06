import { ReactNode } from "react";
import Sidebar from "./ui/Sidebar";

const BookHavenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex gap-5">
      <Sidebar />

      {children}
    </div>
  );
};

export default BookHavenLayout;
