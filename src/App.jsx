import { useEffect } from "react";
import { loadPayPalScript } from "./utilities/loadPayPalScript";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { ShopContextProvider } from "./pages/Shop-context";
import Footer from "./components/Footer";
import router from "./routes/Router";
import "./index.css";

function App() {
  useEffect(() => {
    loadPayPalScript(
      "AZ1WLVmWHoBk0Vy0HmoKZwgqHXuL_8A1oBOZFDnfnsKxNEteVeYhip7yTA-mz4vyyzKo8-sWydk10aIx",
      "buttons,card-fields"
    )
      .then((paypal) => {
        console.log("PayPal SDK loaded", paypal);
      })
      .catch((error) => {
        console.error("Failed to load PayPal SDK", error);
      });
  }, []);
  return (
    <ShopContextProvider>
      <RouterProvider router={router}>
        <div className="App" />
      </RouterProvider>
    </ShopContextProvider>
  );
}

export default App;
