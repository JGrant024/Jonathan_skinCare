import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>
        {" "}
        ©2024 Essentiald Skin Care. <p>All rights reserved.</p>
      </p>

      <div>
        Follow Us on Social Media!
        <a
          href="https://www.facebook.com/essetialdskin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ fontSize: "25px " }} />

          <a
            href="https://www.instagram.com/essentialdskin/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "25px " }} />
          </a>
          <br />
        </a>
        <li style={{ listStyle: "none" }}>
          <Link to="/refund">Refund Policy</Link>
        </li>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: "black",
  color: "#d7812587",
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "165px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

export default Footer;
