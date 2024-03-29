


import AuthService from "../../services/auth.service";
import axios from 'axios';

const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_URL1='http://localhost:8081';

const token=AuthService.getJwt();

const createDepartment = (data) => {
  console.log(token);
  console.log("Data:", data);
  return fetch(`${API_URL}/api/createDepartment`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Create status:", response.status);
      if (response.status === 201) {
        return true;
      } else {
        alert("Cannot create department");
        throw new Error("Network response was not ok.", response.status);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};



const getDepartments = async (orgId) => {

  const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
  };

  const requestOptions = {
      method: 'GET',
      headers: headers
  };

  try {
      const response = await fetch(`${API_URL}/api/getDepartments/${orgId}`, requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      throw new Error(`Error fetching departments: ${error.message}`);
  }
};

const deleteDepartment = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: 'DELETE',
    headers: headers
  };

  try {
    const response = await fetch(`${API_URL}/api/deleteDepartment/${id}`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // If you don't need a response, you can simply return without parsing
    return;
  } catch (error) {
    throw new Error(`Error deleting department: ${error.message}`);
  }
};


const updateDepartmentName = async (depId, newName) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(`${API_URL}/api/updateDepartmentName?department=${depId}&newName=${newName}`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // If you don't need a response, you can simply return without parsing
    return;
  } catch (error) {
    throw new Error(`Error updating department name: ${error.message}`);
  }
};

const updateDepartmentDescription = async (depId, newDesc) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: 'POST',
    headers: headers
  };
  try {
    const response = await fetch(`${API_URL}/api/updateDepartmentDescription?department=${depId}&newDescription=${newDesc}`, requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // If you don't need a response, you can simply return without parsing
    return;
  } catch (error) {
    throw new Error(`Error updating department name: ${error.message}`);
  }
};


const changeDepartmentManager = async (depId, newManagerId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: 'POST',
    headers: headers
  };

  try {
    const response = await fetch(`${API_URL}/api/changeDepartmentManager?department=${depId}&newManager=${newManagerId}`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return;
  } catch (error) {
    throw new Error(`Error changing department manager: ${error.message}`);
  }
};





const DepartmentAPI = {
  createDepartment,
  getDepartments,
  deleteDepartment,
  updateDepartmentName,
  changeDepartmentManager,
  updateDepartmentDescription,

};
export default DepartmentAPI;
