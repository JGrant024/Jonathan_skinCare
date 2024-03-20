import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter from react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import RouterProvider and createBrowserRouter
import Products from "./routes/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./assets/components/Navbar";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "./AuthContext";
import Orders, { loader as ordersLoader } from "./routes/Orders";
import cart from "./pages/cart";
import shop from "./pages/shop";
// import Layout from "./pages/components/Layout";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
