import "./sign-in-page.css";
import Navbar from "../components/start-page-navbar.jsx";

import Form from '../components/common/Form.jsx';
import React, { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import {Cookies,CookiesProvider, useCookies} from 'react-cookie'

export default function SignInPage() {

  const [Cookies, setCookie, removeCookie] = useCookies(["token"])

  const fields = [
    { name: 'userName', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
   
    

  ];


  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', formData);
  
      // Check if the response contains a jwt token
      if (response.data && response.data.jwt) {
        const jwtToken = response.data.jwt;
        console.log('Login successful! Received JWT token:', jwtToken);
        setCookie('token', jwtToken,{path: '/'});
      } else {
        console.error('JWT token not found in response!');
        // Handle the scenario where the token is not received properly
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      // Handle any errors that occur during the login process
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
