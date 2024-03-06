import axios from "axios";


const API_URL = "http://localhost:8080/auth/";



const login = (data) => {
  return fetch(API_URL + "login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      return response.json().then(data => {
        if (data.jwt) {
          // Store the token in local storage
          localStorage.setItem("user", JSON.stringify(data.jwt));
        }
        return { success: true, data };
      });
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    return { success: false, error: 'There was a problem with the fetch operation' };
  });
};



const logout = () => {
  console.log("Logout");
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

