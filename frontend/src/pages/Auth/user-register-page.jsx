import "./user-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import Form from "../components/common/form.jsx";

import React, { useState } from "react";

import UserRegisterService from "../services/auth.service";

import { useNavigate } from "react-router-dom";

export default function UserRegisterPage() {
  const navigateTo = useNavigate();

  const fields = [
    
    { name: "employeeName", label: "Name", type: "text", placeholder: "Name" },

    {
      name: "employeeEmail",
      label: "Email",
      type: "text",
      placeholder: "Email",
    },
    {
      name: "employeePassword",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const handleSubmit = (formData) => {
    UserRegisterService.registerOrg(formData)
      .then((isRegistered) => {
        if (isRegistered) {
          alert("Success");
          navigateTo("/login");
        } else {
          console.error("Registration failed.");
          alert("Something went wrong!");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Handle the error
      });
  };

  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="register-main-page">
        <Form
          title="Employee Register"
          subtitle="Please fill out the form below for register"
          onSubmit={handleSubmit}
          fields={fields}
        />
      </div>
    </div>
  );
}
