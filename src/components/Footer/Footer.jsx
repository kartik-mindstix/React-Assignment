import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Policies</h3>
        <ul>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Rules Of Conduct</li>
          <li>Product Return Policy</li>
          <li>Amway Authorized Sales Channels</li>
          <li>Important Advisory</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>Careers at Amway</li>
          <li>Search Amway Business Owners</li>
          <li>FAQs</li>
          <li>GST Registration Details</li>
          <li>Shipping and Pickup Procedures</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
          <FaYoutube className="icon" />
          <FaTwitter className="icon" />
          <FaTelegramPlane className="icon" />
        </div>
        <p>
          If you have any complaints or suggestions, you may <a href="#">write to us</a>.
        </p>
      </div>
      <div className="footer-section">
        <p>
          Amway India Enterprises Pvt. Ltd.<br />
          Regd. Office - Ground Floor, Elegance Tower, Plot No. 8,<br />
          Non Hierarchical Commercial Centre, Jasola, New Delhi-110025<br />
          For Queries and Grievances, please contact Mr. Hukam Singh.<br />
        </p>
        <p>Email ID - <a href="mailto:care@amway.com">care@amway.com</a><br />
        Tel: <a href="tel:01244508888">0124-4508888</a><br />
        CIN - U74120DL1995PTC071405</p>
      </div>
    </footer>
  );
};

export default Footer;
