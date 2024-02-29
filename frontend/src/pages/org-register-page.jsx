import "./org-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import React, { useState } from "react";

export default function OrgRegisterPage() {
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
      organisation,
      address,
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

  const handleOrganisationChange = (e) => {
    setOrganisation(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", getFormData());
  };

  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="register-main-page">
        <div className="register-left-container2">
          <div className="register-form">
            <div className="register-title">Welcome</div>
            <div className="register-subtitle">
              Create an organisation administrator account
            </div>
            <div className="register-input-container register-ic1">
              <input
                id="name"
                className="register-input"
                type="text"
                placeholder=" "
                value={name}
                onChange={handleNameChange}
              />
              <div className="cut"></div>
              <label for="name" className="register-placeholder">
                Name(name of individual)
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
                id="org-name"
                className="register-input"
                type="text"
                placeholder=" "
                value={organisation}
                onChange={handleOrganisationChange}
              />
              <div className="cut-short"></div>
              <label for="email" className="register-placeholder">
                Name of organisation
              </label>
            </div>
            <div className="register-input-container register-ic2">
              <input
                id="headq-addr"
                className="register-input"
                type="text"
                placeholder=" "
                value={address}
                onChange={handleAddressChange}
              />
              <div class="cut-short"></div>
              <label for="email" className="register-placeholder">
                Headquarter address
              </label>
            </div>
            <button
              type="text"
              className="register-submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="register-right-container"></div>
      </div>
    </div>
  );
}
