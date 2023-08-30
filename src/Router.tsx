import { createBrowserRouter } from "react-router-dom";

//routes
import About from "./routes/About";
import Home from "./routes/Home";
import Root from "./routes/Root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
