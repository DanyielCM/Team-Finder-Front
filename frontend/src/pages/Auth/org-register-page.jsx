import "./org-register-page.css";
import Navbar from "./start-page-navbar.jsx";

import Form from '../../components/common/Form.jsx';

import React, { useState } from "react";

export default function OrgRegisterPage() {

  const fields = [
    { name: 'userName', label: 'Name', type: 'text', placeholder: 'Name(name of individual)' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
    { name: 'organizationName', label: 'orgName', type: 'text', placeholder: 'Name of organisation' },
    { name: 'hqAddress', label: 'hqAddress', type: 'text', placeholder: 'Headquarter address' },
    

  ];


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
