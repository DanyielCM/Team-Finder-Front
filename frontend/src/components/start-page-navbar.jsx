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
          <button className="nav-btn">Login</button>
        </nav>
      </header>
    </>
  );
}
