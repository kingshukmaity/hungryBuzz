import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            We offer a wide variety of food options, so you are sure to find
            something to your taste. We also offer a variety of delivery
            options, so you can get your food delivered to your door or pick it
            up at the restaurant.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Hungry Buzz</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 222-222-2229</li>
            <li>kingshukmaity60@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 Hungry Buzz(kingshuk Maity). All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
