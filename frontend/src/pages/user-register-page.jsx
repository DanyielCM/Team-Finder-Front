import "./user-register-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import Form from "../components/common/Form.jsx";

import React, { useState } from "react";

export default function UserRegisterPage() {


  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
    { name: 'email', label: 'Email', type: 'text', placeholder: 'Email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
   
    

  ];

  const handleSubmit = (formData) => {

    console.log('Form submitted with data:', formData);
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
