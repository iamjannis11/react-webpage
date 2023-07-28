import "./contact.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="footer-container" id="aboutUs">
      <div className="footer-box">
        <div className="ready-box">
          <h4>Be Future-Ready</h4>
          <p>
            Get exclusive <em>digital marketing</em> updates straight to your
            inbox.
          </p>
          <div className="icons-container">
            <BsFacebook size="20px" className="icons" />
            <BsTwitter size="20px" className="icons" />
            <BsInstagram size="20px" className="icons" />
            <BsLinkedin size="20px" className="icons" />
          </div>
        </div>
        <div className="about-box">
          <span>About</span>
          <ul>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="resources-box">
          <span>Resources</span>
          <ul>
            <li>
              <a href="#">Leaders</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="contactUs-box">
          <span>About</span>
          <ul>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer-text">2023 copy rights reserve, jannis</span>
    </div>
  );
};

export default Contact;
