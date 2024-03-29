import axios from "axios";
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";



const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_URL1='http://localhost:8081';

//TODO: employee link
const register = (data,id) => {
  console.log("Id:"+id);
  return fetch(API_URL + "/auth/employee/register?orgId="+id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify( data ),
  })
    .then((response) => {
      console.log("Register status:", response.status);
      if (response.status === 200) {
        return true;
      } else if (response.status === 406) {
        alert("User already exist!");
        throw new Error("User already exist!");
      } else if (response.status === 409) {
        alert("User already exist!");
        throw new Error("User already exist!");
      } else {
        alert("Cannot register user");
        throw new Error("Network response was not ok.", response.status);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};

const registerOrg = (data) => {
  return fetch(API_URL + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Register status:", response.status);
      if (response.status === 200) {
        return true;
      } else if (response.status === 406) {
        alert("User/Organisaton already exist!");
        throw new Error("User/Organisation already exist!");
      } else if (response.status === 409) {
        alert("User/Organisaton already exist!");
        throw new Error("User/Organisation already exist!");
      } else {
        alert("User already exists");
        throw new Error("Network response was not ok.", response.status);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};

const UserRegisterService = {
  register,
  registerOrg,
};

export default UserRegisterService;
