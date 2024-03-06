import "./org-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import Form from "../components/common/form.jsx";

import React, { useState } from "react";

import UserRegisterService from "../services/register.service";

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
    { name: "employeeEmail", label: "Email", type: "email", placeholder: "Email" },
    {
      name: "employeePassword",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "organizationName",
      label: "orgName",
      type: "text",
      placeholder: "Name of organisation",
    },
    {
      name: "hqAddress",
      label: "hqAddress",
      type: "text",
      placeholder: "Headquarter address",
    },
  ];

  /*
  const handleSubmit = async (formData) => {
    console.log("WORKS");


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
*/

  const handleSubmit = (formData) => {
    UserRegisterService.registerOrg(formData)
      .then((isRegistered) => {
        if (isRegistered) {
          alert("Success");
          navigateTo("/login");
        } else {
          console.error("Registration failed.");
          alert("Something went wrong!")
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
          title="Welcome to Teamfinder"
          subtitle="Please fill out the form below"
          onSubmit={handleSubmit}
          fields={fields}
        />
      </div>
    </div>
  );
}