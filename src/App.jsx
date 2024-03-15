import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./routes/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome To Essential'D Skin Care</div>,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <></>;
}

export default App;
