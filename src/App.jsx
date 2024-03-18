import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter from react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import RouterProvider and createBrowserRouter
import Products from "./routes/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
// import Layout from "./pages/components/Layout";

const router = createBrowserRouter([
  {
    // element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Router>
        {" "}
        <Navbar navbar={Navbar} />
      </Router>
    </>
  );
}

export default App;
