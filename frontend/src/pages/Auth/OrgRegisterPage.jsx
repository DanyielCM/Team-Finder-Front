import "./OrgRegisterPage.css";

import Navbar from "./StartPageNavbar.jsx";

import Form from "../../components/common/form.jsx";

import React, { useState } from "react";

import UserRegisterService from "../../services/register.service";

import { useNavigate } from "react-router-dom";

export default function OrgRegisterPage() {
  const navigateTo = useNavigate();

  const fields = [
    {
      name: "employeeUserName",
      label: "Name",
      type: "text",
      placeholder: "Name(name of individual)",
    },
    {
      name: "employeeEmail",
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "employeePassword",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "organizationName",
      label: "Organisation Name",
      type: "text",
      placeholder: "Name of organisation",
    },
    {
      name: "hqAddress",
      label: "Headquarter Address",
      type: "text",
      placeholder: "Headquarter address",
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
          title="Organisation Register"
          subtitle="Please fill out the form below for register"
          onSubmit={handleSubmit}
          fields={fields}
        />
      </div>
    </div>
  );
}
