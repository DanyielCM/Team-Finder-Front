import axios from "axios";

import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080/auth/";

//TODO: employee link
const register = (data) => {
  return fetch(API_URL + "signup", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data}),
  })
  .then(response => {
    if (response.ok) {
      return true; 
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    return false; 
  });
};

const registerOrg = (data) => {
  return fetch(API_URL + "register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      return true; // Registration successful
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    return false; // Registration failed
  });
};


const UserRegisterService = {
    register,
    registerOrg,
  };

export default UserRegisterService;