import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./AuthContext";
import { Outlet } from "react-router-dom";

// Define your router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component that includes Navbar and possibly other UI elements common across all routes
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div>Welcome to Essentiald Skin</div> }, // The default route
      { path: "products", element: <Products /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      // Define other routes as needed
    ],
  },
]);

// Define a Layout component to include the Navbar and outlet for nested routes
function Layout() {
  return (
    <>
      <Navbar />
      {/* Outlet will render the element of the matched nested route */}
      <Outlet />
    </>
  );
}

// App component
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
