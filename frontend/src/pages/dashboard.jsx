import React, { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigateTo = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigateTo('/login'); 
  };
  
  return (
    /*<div className="container">
      <div>
        <h1>Welcome! {auth.user?.username}</h1>
        <button onClick={() => auth.logOut()} className="btn-submit">
          logout
        </button>
      </div>
    </div>*/

    <div className="container">
      <header>
      <p>
        <h1>Welcome to dashboard</h1>
        <strong>Token:</strong> {currentUser}
       
      </p>
      </header>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>



  );
};

export default Dashboard;