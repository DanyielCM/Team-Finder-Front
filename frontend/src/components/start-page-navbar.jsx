import { Outlet, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import LoginDropdown from "./common/login-dropdown.jsx";
import Button from "./common/Button.jsx";

import "./start-page-navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo-container">
          <span>TEAMFINDER</span>
        </div>
        <nav className="nav-navbar">
          
           <LoginDropdown>
            </LoginDropdown>
           
            
        </nav>
      </header>
    </>
  );
}
