import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({setShowLogin}) => { 
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">

        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=" cross icon" />
        </div>
        <div className="login-popup-input">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder=" Your password" required />
        </div>
        <button>
          {" "}
          {currentState === "Sign Up" ? "Create account" : "Log in"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By contininuing, i agree to the term of use & privacy policy</p>
        </div>
        {currentState === "login" ? (
          <p>
            create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
