import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 fixed bottom-0 w-full">
      <p className="mb-2">©2024 Essential'd Skin Care. All rights reserved.</p>
      <div className="mb-2">
        Follow Us on Social Media!
        <a
          href="https://www.facebook.com/essetialdskin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2"
        >
          <FaFacebook className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/essentialdskin/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
      <li className="list-none">
        <Link to="/refund" className="text-white hover:text-gray-300">
          Refund Policy
        </Link>
      </li>
    </footer>
  );
};

export default Footer;
