import React from "react";
import Chat from "../../assets/Chat.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© TicketMate PT. All rights reserved.</p>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <p>Why TicketMate?</p>
          <p>The Team</p>
        </div>
      </div>
      <div className="footer-right">
        <img src={Chat} alt="TicketMate Logo" />
      </div>
    </footer>
  );
};

export default Footer;
