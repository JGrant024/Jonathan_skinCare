import { RouterProvider } from "react-router-dom";
import { ShopContextProvider } from "./pages/Shop-context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import router from "./routes/Router";
import "./index.css";
import { Car } from "phosphor-react";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AZ1WLVmWHoBk0Vy0HmoKZwgqHXuL_8A1oBOZFDnfnsKxNEteVeYhip7yTA-mz4vyyzKo8-sWydk10aIx",
        components: "buttons,card-fields",
      }}
    >
      <AuthProvider>
        <ShopContextProvider>
          <RouterProvider router={router}>
            <div className="App" />
          </RouterProvider>
        </ShopContextProvider>
      </AuthProvider>
    </PayPalScriptProvider>
  );
}

export default App;
