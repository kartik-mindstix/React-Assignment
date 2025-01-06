import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaTelegramPlane,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./MobileFooter.css";

const MobileFooter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-section">
        <button
          className="mobile-footer-toggle"
          onClick={() => toggleSection("policies")}
        >
          <h3>Policies</h3>
          {openSection === "policies" ? <FaMinus /> : <FaPlus />}
        </button>
        {openSection === "policies" && (
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Rules Of Conduct</li>
            <li>Product Return Policy</li>
            <li>Amway Authorized Sales Channels</li>
            <li>Important Advisory</li>
          </ul>
        )}
      </div>

      <div className="mobile-footer-section">
        <button
          className="mobile-footer-toggle"
          onClick={() => toggleSection("usefulLinks")}
        >
          <h3>Useful Links</h3>
          {openSection === "usefulLinks" ? <FaMinus /> : <FaPlus />}
        </button>
        {openSection === "usefulLinks" && (
          <ul>
            <li>Careers at Amway</li>
            <li>Search Amway Business Owners</li>
            <li>FAQs</li>
            <li>GST Registration Details</li>
            <li>Shipping and Pickup Procedures</li>
          </ul>
        )}
      </div>

      <div className="mobile-footer-section">
        <h3>Connect With Us</h3>
        <div className="mobile-social-icons">
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
          <FaYoutube className="icon" />
          <FaTwitter className="icon" />
          <FaTelegramPlane className="icon" />
        </div>
      </div>

      <div className="mobile-footer-section">
        <p>
          Amway India Enterprises Pvt. Ltd.<br />
          Regd. Office - Ground Floor, Elegance Tower, Plot No. 8,<br />
          Non Hierarchical Commercial Centre, Jasola, New Delhi-110025<br />
          For Queries and Grievances, please contact Mr. Hukam Singh.<br />
        </p>
        <p>
          Email ID - <a href="mailto:care@amway.com">care@amway.com</a><br />
          Tel: <a href="tel:01244508888">0124-4508888</a><br />
          CIN - U74120DL1995PTC071405
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
