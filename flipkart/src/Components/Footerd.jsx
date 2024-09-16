import React from 'react';
import '../App.css'; // For styling

const Footerd = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>ABOUT</h3>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Flipkart Stories</li>
          <li>Press</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>HELP</h3>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>CONSUMER POLICY</h3>
        <ul>
          <li>Cancellation & Returns</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>Grievance Redressal</li>
          <li>EPR Compliance</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Mail Us:</h3>
        <p>
          Flipkart Internet Private Limited,<br />
          Buildings Alyssa, Begonia &<br />
          Clove Embassy Tech Village,<br />
          Outer Ring Road, Devarabeesanahalli Village,<br />
          Bengaluru, 560103,<br />
          Karnataka, India
        </p>
      </div>

      <div className="footer-section">
        <h3>Registered Office Address:</h3>
        <p>
          Flipkart Internet Private Limited,<br />
          Buildings Alyssa, Begonia &<br />
          Clove Embassy Tech Village,<br />
          Outer Ring Road, Devarabeesanahalli Village,<br />
          Bengaluru, 560103,<br />
          Karnataka, India<br />
          CIN : U51109KA2012PTC066107<br />
          Telephone: 044-45614700 / 044-67451800
        </p>
      </div>

      <div className="footer-section social-links">
        <h3>Social:</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  );
};

export default Footerd;
