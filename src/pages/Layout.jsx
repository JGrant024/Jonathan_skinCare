import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/Images/Essentiald_logo.avif";

function Layout() {
  return (
    <>
      <Navbar />
      <div></div>
      <Outlet />
    </>
  );
}

export default Layout;
