import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Route = () => {
  return (
    <main>
      <Navbar />
      <div className="px-5 py-5">
        <Outlet />
      </div>
    </main>
  );
};
