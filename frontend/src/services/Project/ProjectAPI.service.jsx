
import AuthService from "../../services/auth.service";
import React from "react";

const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_URL1='http://localhost:8081';

const token=AuthService.getJwt();


const getProjects = async () => {

  const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
  };

  const requestOptions = {
      method: 'GET',
      headers: headers
  };

  try {
      const response = await fetch(`${API_URL}/api/project/getProjects`, requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
  }
};



const addTechStack = async (projectID,idSkill) => {
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
      `${API_URL}/api/project/addTechStack?projectID=${projectID}&techStackID=${idSkill}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    return;
  } catch (error) {
    throw new Error(`Error getting tech stack: ${error.message}`);
  }
};

const findMembers = async (projectID) => {

  const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
  };

  const requestOptions = {
      method: 'GET',
      headers: headers
  };

  try {
      const response = await fetch(`${API_URL}/api/project/findMembers?projectID=${projectID}`, requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      throw new Error(`Error fetching memebers: ${error.message}`);
  }
};


const addMember = async (projectID,employeeId) => {
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
      `${API_URL}/api/project/addMember?projectID=${projectID}&employeeID=${employeeId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    return;
  } catch (error) {
    throw new Error(`Error adding member: ${error.message}`);
  }
};

const removeProject = async (projectID) => {
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
      `${API_URL}/api/project/delete?projectID=${projectID}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return;
  } catch (error) {
    throw new Error(`Error removing project: ${error.message}`);
  }
};

const getProjectMembers = async (projectID) => {

  const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
  };

  const requestOptions = {
      method: 'GET',
      headers: headers
  };

  try {
      const response = await fetch(`${API_URL}/api/project/getEmployees?projectID=${projectID}`, requestOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      throw new Error(`Error fetching members: ${error.message}`);
  }
}



const ProjectAPI = {
getProjects,
addTechStack,
findMembers,
addMember,
removeProject,
getProjectMembers,


  };
  export default ProjectAPI;