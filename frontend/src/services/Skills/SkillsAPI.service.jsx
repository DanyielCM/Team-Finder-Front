

import AuthService from "../../services/auth.service";
const PORT=8081;

const token=AuthService.getJwt();

const getSkillCategories = async (orgId) => {

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
  
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
  
    try {
        const response = await fetch(`http://localhost:${PORT}/api/skills/getSkillCategories/${orgId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching departments: ${error.message}`);
    }
  };
  
  const addSkillCategory = async (categoryName, depId) => {
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
        `http://localhost:${PORT}/api/skills/addSkillCategory/${categoryName}/${depId}`,
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

  const removeSkillCategory = async (skillCatId) => {
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
        `http://localhost:${PORT}/api/skills/removeSkillCategory/${skillCatId}`,
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

  const updateSkillCategoryName = async (skillCatId, newName) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers
    };
    try {
      const response = await fetch(`http://localhost:${PORT}/api/skills/updateSkillCategoryName/${skillCatId}/${newName}`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error updating department name: ${error.message}`);
    }
  };


  const addSkillToCategory = async (skillName,skillDescription,employeeId,skillCategoryId,departmentId) => {
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
        `http://localhost:${PORT}/api/skills/addSkillsToCategory/${skillName}/${skillDescription}/${employeeId}/${skillCategoryId}/${departmentId}`,
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


  const getSkillsByDepartmentAndCategory = async (departmentId,skillCategoryId) => {

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
  
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
  
    try {
        const response = await fetch(`http://localhost:${PORT}/api/skills/getSkillsByDepartmentAndCategory/${departmentId}/${skillCategoryId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching departments: ${error.message}`);
    }
  };


  const removeSkill = async (skillId) => {
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
        `http://localhost:${PORT}/api/skills/removeSkill/${skillId}`,
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


  const updateSkill = async (skillId, newSkillName,newSkillDescription) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers
    };
    try {
      const response = await fetch(`http://localhost:${PORT}/api/skills/updateSkill/${skillId}/${newSkillName}/${newSkillDescription}`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
  
      return;
    } catch (error) {
      throw new Error(`Error updating department name: ${error.message}`);
    }
  };


  




const SkillsAPI = {
getSkillCategories,
addSkillCategory,
removeSkillCategory,
updateSkillCategoryName,
addSkillToCategory,
getSkillsByDepartmentAndCategory,
removeSkill,
updateSkill,
  };
  export default SkillsAPI;