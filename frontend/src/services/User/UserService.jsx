import Api from "./UserAPI.service.jsx";
import AuthService from "../../services/auth.service";
import React from "react";

function parseEmployeeData(data) {
  return data.map((employee) => {
    return {
      employeeId: employee.employeeId,
      employeeUserName: employee.employeeUserName,
      authorities: employee.authorities.map((authority) => authority.authority),
    };
  });
}

function getUsers() {
  const orgId = localStorage.getItem("orgid");

  return Api.getUsers(orgId)
    .then((users) => {
      const parse = parseEmployeeData(users);
      // console.log("Parsed users:", parse);
      return parse;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

async function addUserRole(userId, role) {
  try {
    const user = await Api.addUserRole(userId, role);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function getUserRoles(userId) {
  return Api.getUserRoles(userId)
    .then((userRoles) => {
      return userRoles;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

function getUsersByRoles(orgId, role) {
  return Api.getUsersByRoles(orgId, role)
    .then((usersByRoles) => {
      return usersByRoles;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}
async function deleteUserRole(userId, role) {
  try {
    const departments = await Api.deleteUserRole(userId, role);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

const UserService = {
  getUsers,
  addUserRole,
  getUserRoles,
  deleteUserRole,
  getUsersByRoles,
};
export default UserService;
