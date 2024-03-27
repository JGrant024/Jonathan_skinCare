import { useEffect, useState } from "react";
import { loadPayPalScript } from "./utilities/loadPayPalScript";
import { RouterProvider } from "react-router-dom";
import { ShopContextProvider } from "./pages/Shop-context";
import { CartProvider } from "./components/cart";
import supabase from "./SupabaseClient";
import Login from "./pages/Login";
import UserProfilePage from "./pages/UserProfilePage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import router from "./routes/Router";
import "./index.css";
import { Car } from "phosphor-react";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AZ1WLVmWHoBk0Vy0HmoKZwgqHXuL_8A1oBOZFDnfnsKxNEteVeYhip7yTA-mz4vyyzKo8-sWydk10aIx",
        components: "buttons,card-fields",
      }}
    >
      <ShopContextProvider>
        <CartProvider>
          <RouterProvider router={router}>
            <div className="App" />
            {/* <div>
          {!session ? (
            <Login onLogin={() => setSession(supabase.auth.session())} />
          ) : (
            <UserProfilePage />
          )}
        </div> */}
          </RouterProvider>
        </CartProvider>
      </ShopContextProvider>
    </PayPalScriptProvider>
  );
}

export default App;
