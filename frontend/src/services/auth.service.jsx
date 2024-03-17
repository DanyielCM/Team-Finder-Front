import axios from "axios";

const PORT=8081;
const API_URL='http://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';


function getAuthorities(array) {
  return array.map((obj) => obj.authority);
}

const login = (data) => {
  
  return fetch(API_URL + "/auth/login", {
    method: 'POST',
    
    headers: {
      'Content-Type': 'application/json',
    //  'Access-Control-Allow-Origin':'*',
     // 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    
    console.log("Status code:",response.status)
    if (response.status===200) {
      
      return response.json().then(data => {
        if (data.jwt) {
         
     
          localStorage.setItem("jwt", JSON.stringify(data.jwt));
          localStorage.setItem("user", JSON.stringify(data.employee.employeeUserName));
          localStorage.setItem("authorities", JSON.stringify(getAuthorities(data.employee.authorities)));
         localStorage.setItem("orgname", JSON.stringify(data.employee.organization.organizationName));
         localStorage.setItem("employeeurl", JSON.stringify(data.employee.organization.employeeRegisterURL));
         localStorage.setItem("employeeid", JSON.stringify(data.employee.employeeId));
           localStorage.setItem("orgid", JSON.stringify(data.employee.organization.organizationId));
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
  localStorage.removeItem("orgname");
  localStorage.removeItem("employeeurl");
  localStorage.removeItem("lastOpen");
  localStorage.removeItem("orgid");
};

const getAuthority = () => {
  const authoritiesString = localStorage.getItem("authorities");
 
  if (authoritiesString) {

    return JSON.parse(authoritiesString);
  } else {
    return []; 
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getJwt = () => {
  return JSON.parse(localStorage.getItem("jwt"));
};
const getOrgId = () => {
  return JSON.parse(localStorage.getItem("orgid"));
};

const getOrgName = () => {
  return JSON.parse(localStorage.getItem("orgname"));
};

  const getEmployeeId=()=>{
    return JSON.parse(localStorage.getItem("employeeid"));
  };

 

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getAuthority,
  getJwt,
  getOrgName,
  getOrgId,
  getEmployeeId,
 // getEmpoyeeURL,
};

export default AuthService;
