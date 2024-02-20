import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/error", element: <ErrorPage /> },
]);

export default router;
