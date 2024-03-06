import React, { useState } from "react";
import "./login-page.css";
import Navbar from "../components/start-page-navbar.jsx";
import Form from "../components/common/Form.jsx";
import "./login-page.css";
import { useAuth } from "../hooks/AuthProvider";


export default function SignInUserPage() {
  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const auth = useAuth();

  const handleSubmit = (formData) => {
    if (formData.username !== "" && formData.password !== "") {
      auth.loginAction(formData);
      return;
    }
    alert("please provide a valid input");
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
