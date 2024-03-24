import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { ShopContextProvider } from "./pages/Shop-context";
import Footer from "./components/Footer";
import router from "./routes/Router";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        {/* RouterProvider is used here to wrap the part of your app that should be controlled by the router. */}
        <RouterProvider router={router}>
          {/* Your routes will be rendered here based on the router configuration */}
          <div className="App">
            {/* Assuming Footer is static and should always be rendered */}
            <Footer />
          </div>
        </RouterProvider>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
