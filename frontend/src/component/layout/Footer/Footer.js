import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>E-Purchase.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Naman Vyas</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/namanvyas54">Instagram</a>
        <a href="https://www.linkedin.com/in/vyas-naman/">Linkedin</a>
        <a href="http://github.com/namangitanjali">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
