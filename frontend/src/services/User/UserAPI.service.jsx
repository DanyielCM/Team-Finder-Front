import Api from "./UserAPI.service.jsx";
import AuthService from "../../services/auth.service";
import React from "react";

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
  // localhost:8080/api/employee/getEmployees?orgId={id}
  try {
    const response = await fetch(
      `http://localhost:8081/api/employee/getEmployees?orgId=${orgId}`,
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
  //http://localhost:8080/api/employee/getEmployeesByRole?orgId={orgId}&role={StringAuthority(DepartmentManager)}
  try {
    const response = await fetch(
      `http://localhost:8081/api/employee/getEmployeesByRole?orgId=${orgId}&role=${role}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Wait for JSON data to be resolved
    // console.log(data); // Now you can log the actual data
    return data;
  } catch (error) {
    throw new Error(`Error fetching departments: ${error.message}`);
  }
};

//localhost:8080/api/employee/addRole/{id}/{role}
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
      `http://localhost:8081/api/employee/addRole/${userId}/${role}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // If you don't need a response, you can simply return without parsing
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
      `http://localhost:8081/api/employee/getRole/${userId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Wait for JSON data to be resolved
    // console.log(data); // Now you can log the actual data
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
      `http://localhost:8081/api/employee/removeRole/${userId}/${role}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // If you don't need a response, you can simply return without parsing
    return;
  } catch (error) {
    throw new Error(`Error deleting role: ${error.message}`);
  }
};

const UserAPI = {
  getUsers,
  addUserRole,
  getUserRoles,
  deleteUserRole,
  getUsersByRoles,
};
export default UserAPI;
