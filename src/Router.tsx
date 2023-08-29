import { createBrowserRouter } from "react-router-dom";

//routes
import About from "./pages/about";
import Home from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
