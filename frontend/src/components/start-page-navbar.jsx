import { Outlet, Link } from "react-router-dom";

import "./start-page-navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo-container">
          <span>TEAMFINDER</span>
        </div>
        <nav className="nav-navbar">
          
          <Link to="/sign-in" className='nav-btn'>Login</Link>{" "}
        
        </nav>
      </header>
    </>
  );
}
