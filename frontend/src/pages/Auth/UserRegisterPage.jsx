import "./UserRegisterPage.css";
import Navbar from "./StartPageNavbar.jsx";

import Form from "../../components/common/form.jsx";

import React, { useState } from "react";

import UserRegisterService from "../../services/auth.service";

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function UserRegisterPage() {
  const navigateTo = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const organisation = searchParams.get('organisation');
  

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
    console.log(formData);
    UserRegisterService.registerOrg(formData)
      .then((isRegistered) => {
        if (isRegistered) {
          alert("Success");
          navigateTo("/sign-in");
        } else {
          window.location.reload(false);
          console.error("Registration failed.");
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
          title={"Welcome to "+organisation}
          subtitle="Please fill out the form below for register"
          onSubmit={handleSubmit}
          fields={fields}
        />
      </div>
    </div>
  );
}
