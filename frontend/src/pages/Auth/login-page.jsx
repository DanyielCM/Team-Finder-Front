import React, { useState } from "react";
import "./login-page.css";
import Navbar from "./start-page-navbar.jsx";
import Form from "../../components/common/form.jsx";
import "./login-page.css";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function SignInUserPage() {
  const navigate = useNavigate();

  const fields = [
    {
      name: "employeeEmail",
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
    },
    {
      name: "employeePassword",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleSubmit = (formData) => {
    //navigate("/dashboard"); //Just for test dashboard
    if (formData.email !== "" && formData.password !== "") {
      AuthService.login(formData)
        .then((response) => {
          if (response.success) {
            console.log("Login successful:", response.data);
            navigate("/dashboard");
          } else {
            console.error("Login failed:", response.error);
          }
        })
        .catch((error) => {
          console.error("Fetch operation failed:", error);
        });
    } else {
      alert("Please enter a valid email and password");
    }
  };

  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="register-main-page">
        <Form
          title="Welcome to TeamFinder"
          subtitle="Please fill out the form below"
          onSubmit={handleSubmit}
          fields={fields}
        />
      </div>
    </div>
  );
}
