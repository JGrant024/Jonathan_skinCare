import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <aside className="asideNav">
      <nav>
        <ul className="asideLinks">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Products">Shop</Link>
          </li>
          <li>
            <Link to="/refund">Refund Policy</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart size={44} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
