import "./sign-in-user-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import Form from '../components/common/Form.jsx';

import React, { useState } from "react";

export default function SignInUserPage() {


  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
   
    

  ];

  const handleSubmit = (formData) => {

    console.log('Form submitted with data:', formData);
  };



  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="register-main-page">
      <Form
         title="Login as Employee"
        subtitle="Please fill out the form below"
        onSubmit={handleSubmit}
        fields={fields}
      />
    </div>
    </div>
  );
}