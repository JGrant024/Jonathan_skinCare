import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-amber-900 text-center py-2 fixed bottom-0 w-full flex items-center justify-between text-xs">
      <p>©2024 Essential'd Skin Care. All rights reserved.</p>
      <div>
        Follow Our Social Media:
        <a
          href="https://www.facebook.com/essetialdskin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-1"
        >
          <FaFacebook className="text-lg" />
        </a>
        <a
          href="https://www.instagram.com/essentialdskin/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-1"
        >
          <FaInstagram className="text-lg" />
        </a>
      </div>
      <Link to="/refund" className="hover:underline list-none">
        Refund Policy
      </Link>
    </footer>
  );
};

export default Footer;
