import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>
        {" "}
        ©2024 Essentiald Skin Care. <p>All rights reserved.</p>
      </p>
      <a href="/privacy-policy" style={linkStyle}>
        Privacy Policy
      </a>
      <div>
        <a
          href="https://www.facebook.com/essetialdskin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/essentialdskin/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "brown",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

export default Footer;
