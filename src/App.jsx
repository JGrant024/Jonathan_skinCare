import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./AuthContext";
import Orders, { loader as ordersLoader } from "./pages/Orders";
import ProductsDisplay from "./Shop";

import EPRODUCTS from "./essential_products";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  { 
    // element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Welcome to Essentiald Skin </div>,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/layout",
        element: <Layout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/eproducts",
        element: <EPRODUCTS />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ordersLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <Router>
          <Navbar navbar={Navbar} />
          <h1>Shop Around!</h1>
          <ProductsDisplay />
          <Routes>
            <Route path="/" element={<shop />} />
            <Route path="/login" element={<cart />} />
            <Route path="/cart" />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
