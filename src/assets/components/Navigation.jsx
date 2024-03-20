import { Link } from "react-router-dom";

const Navigtion = ({ navItems }) => {
  return (
    <nav>
      <ul>
        {navItems.map((link, index) => {
          return (
            <li key={`{link.products}} - ${index}`}>
              <Link to={link.url}>{link.products}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigtion;
