import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="Links">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>

          <Link to="/Products">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">
            <ShoppingCart size={44} />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
