import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <aside className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex gap-6 justify-center items-center">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-300 transition-colors duration-200 flex items-center"
            >
              <ShoppingCart size={24} weight="fill" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
