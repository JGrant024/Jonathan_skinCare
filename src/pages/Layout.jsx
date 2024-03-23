import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/Images/Essentiald_logo.avif";

function Layout() {
  return (
    <>
      <Navbar />
      <h1>Welcome to EssentialD Skin</h1>
      <div>
        <img src={logo} alt="EssentialD Skin Logo" />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
