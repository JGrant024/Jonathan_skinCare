import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import router from "./routes/Router";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <div className="App">
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
