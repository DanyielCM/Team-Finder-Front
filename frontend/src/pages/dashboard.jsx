import React, { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";
import AuthService from "../services/auth.service";

const Dashboard = () => {
  const currentUser = AuthService.getCurrentUser();
  
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
      <button onClick={() => AuthService.logout()}>Logout</button>
    </div>



  );
};

export default Dashboard;