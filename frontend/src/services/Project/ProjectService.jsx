import Api from "./ProjectAPI.service.jsx";
import AuthService from "../../services/auth.service";
import React from "react";

const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_URL1='http://localhost:8081';
const token=AuthService.getJwt();

const createProject = (data) => {
  
  console.log("Data:", data);
  return fetch(`${API_URL}/api/project/create`, {
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
       return false;
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};

function getProjects() {
  

  return Api.getProjects()
      .then(projects => {
    
        return projects;
         
      })
      .catch(error => {
          console.error("Error fetching data:", error.message);
      });
}

async function addTechStack(projectID,skillId) {
  try {
    const skill = await Api.addTechStack(projectID,skillId);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function findMembers(projectID) {
  

  return Api.findMembers(projectID)
      .then(members => {
    
        return members;
         
      })
      .catch(error => {
          console.error("Error fetching data:", error.message);
      });
}
async function addMember(projectID,employeeId) {
  try {
    const skill = await Api.addMember(projectID,employeeId);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function removeProject(projectID) {
  try {
    const skill = await Api.removeProject(projectID);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

function getProjectMembers(projectID) {
  

  return Api.getProjectMembers(projectID)
      .then(members => {
    
        return members;
         
      })
      .catch(error => {
          console.error("Error fetching data:", error.message);
      });
}





const ProjectService = {
   createProject,
   getProjects,
   addTechStack,
   findMembers,
   addMember,
   removeProject,
   getProjectMembers,

  };
  export default ProjectService;