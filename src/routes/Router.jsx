import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "products", element: <Products /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      // Define other routes as needed
    ],
  },
]);

export default router;