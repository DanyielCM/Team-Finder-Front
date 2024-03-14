import { Outlet, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Button from '../../components/common/button.jsx';;

import "./StartPageNavbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="nav-header">
        <div className="nav-logo-container">
          <a className="logo" href="/">TEAMFINDER</a>
        </div>
        <nav className="nav-navbar">
          
        <Button  onClick={() => navigate("/sign-in")}>Login</Button>            
        </nav>
      </header>
    </>
  );
}
