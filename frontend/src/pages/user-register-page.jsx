import "./user-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import React, { useState } from "react";

export default function UserRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [address, setAddress] = useState("");


  const getFormData = () => {
    return {
      name,
      email,
      password,
      
    };
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", getFormData());
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="register-main-page">
        <div className="register-left-container2">
          <div className="user-form">
            <div className="user-title">Welcome</div>
            <div className="user-subtitle">
              Create an user account
            </div>
            <div className="user-input-container user-ic1">
              <input
                id="name"
                className="user-input"
                type="text"
                placeholder=" "
                value={name}
                onChange={handleNameChange}
              />
              <div className="cut"></div>
              <label for="name" className="user-placeholder">
                Name(name of individual)
              </label>
            </div>
            <div className="user-input-container user-ic2">
              <input
                id="email"
                className="user-input"
                type="email"
                placeholder=" "
                value={email}
                onChange={handleEmailChange}
              />
              <div className="cut"></div>
              <label for="email" className="user-placeholder">
                Email
              </label>
            </div>
            <div className="user-input-container user-ic2">
              <input
                id="password"
                className="user-input"
                type="password"
                placeholder=" "
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="cut-short"></div>
              <label for="email" className="user-placeholder">
                Password
              </label>
            </div>
          
            <button type="text" className="user-submit" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>

        <div className="user-right-container"></div>
      </div>
    </>
  );
}
