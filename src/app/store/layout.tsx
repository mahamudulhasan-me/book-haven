import { ReactNode } from "react";
import CartProviderData from "../provider/CartProvider";
import Sidebar from "./ui/Sidebar";

const BookHavenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex gap-5">
      <CartProviderData>
        <Sidebar />
        {children}
      </CartProviderData>
    </div>
  );
};

export default BookHavenLayout;
