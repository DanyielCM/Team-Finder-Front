import axios from "axios";

import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080/auth/";

//TODO: employee link
const register = (data) => {
  return fetch(API_URL + "signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
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
        alert("User already exists");
        throw new Error("Network response was not ok.", response.status);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};

const registerOrg = (data) => {
  return fetch(API_URL + "register", {
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
