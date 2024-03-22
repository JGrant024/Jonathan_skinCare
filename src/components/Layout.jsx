import { Outlet } from "react-router-dom";
import Navigtion from "../components/Navigation";

const mainNav = [
  { title: "Main", URL: "/" },
  { title: "Products", URL: "/Products" },
];

const Layout = () => {
  return (
    <>
      <Navigtion navItems={mainNav} />
      <Outlet />
    </>
  );
};

export default Layout;
