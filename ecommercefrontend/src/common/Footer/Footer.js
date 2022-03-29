import React from 'react';
import playStore from '../../assets/images/playStore.png';
import appStore from '../../assets/images/appStore.png';
import FlipzonLogo from '../../assets/images/FlipzonLogo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      {/* <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div> */}
      <div className="rightFooter">
        <h4>Get to know Us</h4>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Services</a>
      </div>

      <div className="midFooter">
        <div>
          <img src={FlipzonLogo} />
        </div>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Flipzon</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/r">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
