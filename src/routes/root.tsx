import { Outlet } from "react-router-dom";
import { useRouteGuards } from "../state/use-route-guards";

export const Root = () => {
  useRouteGuards();
  return (
    <main>
      
        <Outlet />
      
    </main>
  );
};
