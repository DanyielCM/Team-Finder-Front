import Api from './DepartmentAPI.service.jsx'
import AuthService from "../../services/auth.service";
import React from 'react';

const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_URL1='http://localhost:8081';


function parseDepartmentData(jsonData) {
    return jsonData.map((department) => ({
      departmentId: department.departmentId,
      departmentName: department.departmentName,
      departmentDescription: department.departmentDescription,
      departmentManager: department.departmentManager.employeeUserName,
    }));
  }

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
        return false
        throw new Error("Network response was not ok.", response.status);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      return false;
    });
};


  function getDepartments() {
    const orgId = localStorage.getItem("orgid");

    return Api.getDepartments(orgId)
        .then(departments => {
      
          const parse = parseDepartmentData(departments);
        
          return parse;
           
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
        });
}
function getDepartmentByManager(orgId) {


  return Api.getDepartments(orgId)
      .then(departments => {
        
          
          const filteredDepartments = departments.filter(dept => dept.departmentManager.employeeUserName===JSON.parse(localStorage.getItem('user')));
         
          const parse = parseDepartmentData(filteredDepartments);
          return parse;
      })
      .catch(error => {
          console.error("Error fetching data:", error.message);
      });
}

  async function updateDepartmentName(depId, newName) {
    try {
      const departments = await Api.updateDepartmentName(depId, newName);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
 
  async function updateDepartmentDescription(depId, newDesc) {
    try {
      const departments = await Api.updateDepartmentDescription(depId, newDesc);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  async function deleteDepartment(id) {
    try {
      const departments = await Api.deleteDepartment(id);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  }

  async function changeDepartmentManager(depId, newManagerId) {
    try {
      const departments = await Api.changeDepartmentManager(
        depId,
        newManagerId
      );
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  }

  const DepartmentService = {
    createDepartment,
    getDepartments,
    deleteDepartment,
    updateDepartmentName,
    changeDepartmentManager,
    updateDepartmentDescription,
    getDepartmentByManager,
  
  };
  export default DepartmentService;