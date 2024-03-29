import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import Login, { action as loginAction } from "../pages/Login";
import Signup, { action as SignupAction } from "../pages/Signup";
import Layout from "../pages/Layout";
import Refund from "../pages/Refund";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import ContactDeliveryForm from "../components/ContactDeliveryForm 2";
import PaymentForm from "../pages/PaymentForm";
import OrderPage from "../pages/OrderPage";
import UserProfilePage from "../pages/UserProfilePage";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "login", element: <Login />, action: loginAction },
      { path: "signup", element: <Signup />, action: SignupAction },
      { path: "refund", element: <Refund /> },
      { path: "cart", element: <CartPage /> },
      { path: "contact", element: <ContactDeliveryForm /> },
      { path: "payment", element: <PaymentForm /> },
      { path: "orders", element: <OrderPage /> },
      { path: "profile", element: <UserProfilePage /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
