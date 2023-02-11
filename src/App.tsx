import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EndgamePage } from "./routes/endgame.page";
import { IndexPage } from "./routes/index.page";
import { PortfolioPage } from "./routes/portfolio/portfolio.page";
import { Root } from "./routes/root";
import { SecurityPage } from "./routes/security/security.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/security/:ticker",
        element: <SecurityPage />,
      },
      {
        path: "/endgame",
        element: <EndgamePage />,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
