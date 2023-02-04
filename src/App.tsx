import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "./routes/route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <div>Hello</div>,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
