import "./org-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import React, { useState } from "react";

export default function OrgRegisterPage() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationName, setOrganisationNameorganizationName] = useState("");
  const [hqAddress, sethqAddress] = useState("");

  const getFormData = () => {
    return {
      userName,
      email,
      password,
      organizationName,
      hqAddress,
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

  const handleOrganisationNameorganizationNameChange = (e) => {
    setOrganisationNameorganizationName(e.target.value);
  };

  const handlehqAddressChange = (e) => {
    sethqAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("WORKS");
    e.preventDefault();

    const formData = getFormData();

    try {
      const response = await fetch('http://localhost:8080/api/createOrganization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Reîncărcați pagina sau faceți alte acțiuni după ce cererea este completă
      // Exemplu: redirectToSomewhere();
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
      // Handle errors here
    }
  };

  return (
      <>
        <Navbar></Navbar>
        <div className="register-main-page">
          <div className="register-left-container2">
            <div className="register-form">
              <div className="register-title">Welcome</div>
              <div className="register-subtitle">
                Create an organizationName administrator account
              </div>
              <div className="register-input-container register-ic1">
                <input
                    id="userName"
                    className="register-input"
                    type="text"
                    placeholder=" "
                    value={userName}
                    onChange={handleNameChange}
                />
                <div className="cut"></div>
                <label for="userName" className="register-placeholder">
                  Name(userName of individual)
                </label>
              </div>
              <div className="register-input-container register-ic2">
                <input
                    id="email"
                    className="register-input"
                    type="email"
                    placeholder=" "
                    value={email}
                    onChange={handleEmailChange}
                />
                <div className="cut"></div>
                <label for="email" className="register-placeholder">
                  Email
                </label>
              </div>
              <div className="register-input-container register-ic2">
                <input
                    id="password"
                    className="register-input"
                    type="password"
                    placeholder=" "
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="cut-short"></div>
                <label for="email" className="register-placeholder">
                  Password
                </label>
              </div>
              <div class="register-input-container register-ic2">
                <input
                    id="org-userName"
                    className="register-input"
                    type="text"
                    placeholder=" "
                    value={organizationName}
                    onChange={handleOrganisationNameorganizationNameChange}
                />
                <div className="cut-short"></div>
                <label for="email" className="register-placeholder">
                  Name of organizationName
                </label>
              </div>
              <div className="register-input-container register-ic2">
                <input
                    id="headq-addr"
                    className="register-input"
                    type="text"
                    placeholder=" "
                    value={hqAddress}
                    onChange={handlehqAddressChange}
                />
                <div class="cut-short"></div>
                <label for="email" className="register-placeholder">
                  Headquarter address
                </label>
              </div>
              <button type="button" className="register-submit" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </div>

          <div className="register-right-container"></div>
        </div>
      </>
  );
}
