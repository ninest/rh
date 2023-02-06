import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { useRouteGuards } from "../state/use-route-guards";

export const Root = () => {
  useRouteGuards();
  return (
    <main>
      <Navbar />
      <div className="px-5 py-5">
        <Outlet />
      </div>
    </main>
  );
};
