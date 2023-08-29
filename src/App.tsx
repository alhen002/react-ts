// components

import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";

export default function App() {
  return <RouterProvider router={router} />;
}
