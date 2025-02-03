import { NAV_LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const online = useOnlineStatus();
  return (
    <div id="header" className="flex justify-between items-center bg-gray-100 hover:shadow-md cursor-pointer">
      <div id="logoContainer">
        <img id="logo" className="w-30" src={NAV_LOGO} alt="logo"></img>
      </div>
      <div id="navbar" >
        <ul className="flex px-4 ">
          <li className="px-3"> Internet : {online ? "✔️" : "✖️"}</li>
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about">About</Link></li>
          <li className="px-3"><Link to="/contact">Contact</Link></li>
          <li className="px-3"><Link to="/grocerry">Grocerry</Link></li>
          <li className="px-3"><Link to="/cart">Cart</Link></li>
          <button
            className="px-3"
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
