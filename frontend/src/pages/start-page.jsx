import "./start-page.css";
import { Outlet, Link } from "react-router-dom";

import Navbar from "../components/start-page-navbar.jsx";

export default function StartPage() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-page">
        <div className="left-container">
          <div className="main-header">
            <h1>TEAMFINDER</h1>
            <h2>Uniting Skills, Building Teams</h2>
            <h4>
              Discover your perfect project team effortlessly with TeamFinder!
            </h4>
          </div>

          <div className="create-org">
            <h2>Launch Your Organization's Journey</h2>
            <button type="button" className="btn">
              <Link to="/register">Create an organisation</Link>{" "}
            </button>
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </div>
  );
}
