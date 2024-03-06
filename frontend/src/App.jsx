import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AuthProvider from "./hooks/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./router/route";

import StartPage from "./pages/start-page.jsx";
import OrgRegisterPage from "./pages/org-register-page.jsx";
import UserRegisterPage from "./pages/user-register-page.jsx";
import SignInPage from "./pages/sign-in-page.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SignInUserPage from "./pages/login-page.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            {}
            <Route exact path="/" element={<StartPage />} />
            {}
            <Route path="/login" element={<SignInUserPage />} />
            <Route path="/register" element={<OrgRegisterPage />} />
          
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
/*
return (
  <BrowserRouter>
    <Routes>
      {}
      <Route exact path="/" element={<StartPage/>} />

      {}
      <Route path="/register" element={<OrgRegisterPage />} />
      <Route path="/register-user" element={<UserRegisterPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-in-user" element={<SignInUserPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
*/
