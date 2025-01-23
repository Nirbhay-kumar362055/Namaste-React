import { NAV_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div id="header">
      <div id="logoContainer">
        <img id="logo" src={NAV_LOGO} alt="logo"></img>
      </div>
      <div id="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            className="loginBtn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
