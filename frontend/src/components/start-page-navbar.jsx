import { Outlet, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import LoginDropdown from "./common/login-dropdown.jsx";
import Button from "./common/button.jsx";

import "./start-page-navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo-container">
          <a className="logo" href="/">TEAMFINDER</a>
        </div>
        <nav className="nav-navbar">
          
        <Button  onClick={() => navigate("/login")}>Login</Button>            
        </nav>
      </header>
    </>
  );
}
