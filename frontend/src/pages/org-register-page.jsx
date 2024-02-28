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
    <div className="App">
      <Navbar></Navbar>
      <div className="main-page">
        <div className="left-container2">
          <div class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">
              Create an organisation administrator account
            </div>
            <div class="input-container ic1">
              <input
                id="name"
                class="input"
                type="text"
                placeholder=" "
                value={name}
                onChange={handleNameChange}
              />
              <div class="cut"></div>
              <label for="name" class="placeholder">
                Name(name of individual)
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="email"
                class="input"
                type="email"
                placeholder=" "
                value={email}
                onChange={handleEmailChange}
              />
              <div class="cut"></div>
              <label for="email" class="placeholder">
                Email
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="password"
                class="input"
                type="password"
                placeholder=" "
                value={password}
                onChange={handlePasswordChange}
              />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">
                Password
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="org-name"
                class="input"
                type="text"
                placeholder=" "
                value={organisation}
                onChange={handleOrganisationChange}
              />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">
                Name of organisation
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="headq-addr"
                class="input"
                type="text"
                placeholder=" "
                value={address}
                onChange={handleAddressChange}
              />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">
                Headquarter address
              </label>
            </div>
            <button type="text" class="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </div>
  );
}
