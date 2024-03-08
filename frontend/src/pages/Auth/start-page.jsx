import "./start-page.css";
import Navbar from "./start-page-navbar.jsx";
import { useNavigate } from "react-router-dom";
import Button from '../../components/common/button.jsx';;
import React, { useState } from "react";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="start-main-page">
        <div className="start-left-container">
          <div className="start-main-header">
            <h1 className='start-title'>TEAMFINDER</h1>
            <h2 className='start-subtitle'>Uniting Skills, Building Teams</h2>
            <h4 className='start-subtitle'>
              Discover your perfect project team effortlessly with TeamFinder!
            </h4>
          </div>

          <div className="start-create-org">
            <h2 className='start-subtitle'>Launch Your Organization's Journey</h2>

    
            <Button onClick={() => navigate("/register")}>
              Create an Organisation
            </Button>

          </div>

         
          
        </div>

        <div className="start-right-container"></div>
      </div>
    </div>
  );
}
