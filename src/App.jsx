import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./routes/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome to Essentiald Skin </div>,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
