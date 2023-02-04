import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "./routes/index.page";
import { Route } from "./routes/route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
