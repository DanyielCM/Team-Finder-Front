import { Outlet, Link } from "react-router-dom";

import "./start-page-navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <span>TEAMFINDER</span>
        </div>
        <nav className="navbar">
          <button className="btn">Login</button>
        </nav>
      </header>
    </>
  );
}
