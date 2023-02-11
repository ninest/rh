import { Outlet } from "react-router-dom";
import { useRouteGuards } from "../state/use-route-guards";
import { useTimer } from "../state/use-timer";

export const Root = () => {
  useRouteGuards();

  return (
    <main>
      <Outlet />
    </main>
  );
};
