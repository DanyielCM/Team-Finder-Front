import axios from "axios";


const API_URL = "http://localhost:8081/auth/";

function getAuthorities(array) {
  return array.map(obj => obj.authority);
}

const login = (data) => {
  
  return fetch(API_URL + "login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    
    console.log("Status code:",response.status)
    if (response.status===200) {
      
      return response.json().then(data => {
        if (data.jwt) {
          console.log("Data:",data);
          // Store the token in local storage
          localStorage.setItem("jwt", JSON.stringify(data.jwt));
          localStorage.setItem("user", JSON.stringify(data.employee.employeeUserName));
          localStorage.setItem("authorities", JSON.stringify(getAuthorities(data.employee.authorities)));
        }
        return { success: true, data };
      });
    } else if(response.status===401) {
      alert('Invalid credentials!');
      throw new Error('Invalid credentials');
    }else if(response.status===404){
      alert('No user found with this email');
      throw new Error('No user found with this email');
    } else  {
    alert('Network error');
    throw new Error('Cannot get data');
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
  localStorage.removeItem("jwt");
  localStorage.removeItem("authorities");
};



const getAuthority = () => {
 
  return localStorage.getItem("authorities");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getJwt = () => {
    return JSON.parse(localStorage.getItem("jwt"));
  };

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getAuthority,
  getJwt,
};

export default AuthService;
