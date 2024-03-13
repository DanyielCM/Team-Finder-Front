import Api from './DepartmentAPI.service.jsx'
import AuthService from "../../services/auth.service";
import React from 'react';

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
  return fetch("http://localhost:8081/api/createDepartment", {
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


  function getDepartments() {
    const orgId = localStorage.getItem("orgid");

    return Api.getDepartments(orgId)
        .then(departments => {
            const parse = parseDepartmentData(departments);
            console.log(parse);
            return parse;
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
        });
}

  async function updateDepartment(depId, newName) {
    try {
      const departments = await Api.updateDepartmentName(depId, newName);
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
    updateDepartment,
    changeDepartmentManager,
  
  };
  export default DepartmentService;