import Api from "./UserAPI.service.jsx";
import AuthService from "../../services/auth.service";
import React from "react";

const API_URL='http://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';


const token = AuthService.getJwt();

const getUsers = async (orgId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/employee/getEmployees?orgId=${orgId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};

const getUsersByRoles = async (orgId, role) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/employee/getEmployeesByRole?orgId=${orgId}&role=${role}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); 
  
    return data;
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};


const addUserRole = async (userId, role) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "POST",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/employee/addRole/${userId}/${role}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    
    return;
  } catch (error) {
    throw new Error(`Error updating department name: ${error.message}`);
  }
};
const getUserRoles = async (userId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/employee/getRole/${userId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); 
   
    return data;
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};

const deleteUserRole = async (userId, role) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "DELETE",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/employee/removeRole/${userId}/${role}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return;
  } catch (error) {
    throw new Error(`Error deleting role: ${error.message}`);
  }
};



const getUnassignedUsers = async (orgId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/getUnassignedEmployees?orgId=${orgId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); 
   
    return data;
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};


const assignUserToDepartment = async (userId, depId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "POST",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/assignEmployeeToDepartment/${userId}/${depId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

   
    return;
  } catch (error) {
    throw new Error(`Error assigning user to deaprtment: ${error.message}`);
  }
};


const removeUserFromDepartment = async (userId, depId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "DELETE",
    headers: headers,
  };

  try {
    const response = await fetch(
      `${API_URL}/api/removeEmployeeFromDepartment/${userId}/${depId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
 
    return;
  } catch (error) {
    throw new Error(`Error deleting role: ${error.message}`);
  }
};

const getUsersFromDepartment = async (depId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "GET",
    headers: headers,
  };
 
  try {
    const response = await fetch(
      `${API_URL}/api/getEmployeesFromDepartment/${depId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};


const UserAPI = {
  getUsers,
  addUserRole,
  getUserRoles,
  deleteUserRole,
  getUsersByRoles,
  getUnassignedUsers,
  assignUserToDepartment,
  removeUserFromDepartment,
  getUsersFromDepartment,
};
export default UserAPI;
