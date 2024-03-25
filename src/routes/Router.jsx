import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../pages/Layout";
import Refund from "../pages/Refund";
import Cart from "../components/cart";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import ContactDeliveryForm from "../pages/ContactDeliveryForm";
import PaymentForm from "../pages/PaymentForm";
import OrderPage from "../pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "refund", element: <Refund /> },
      { path: "cart", element: <Cart /> },
      { path: "cartpage", element: <CartPage /> },
      { path: "contact", element: <ContactDeliveryForm /> },
      { path: "payment", element: <PaymentForm /> },
      { path: "orders", element: <OrderPage /> },
      // Define other routes as needed
    ],
  },
]);

export default router;
