

import AuthService from "../../services/auth.service";

const API_URL='https://atc-2024-letsdoit-be-linux-web-app.azurewebsites.net';
const API_UR1='http://localhost:8081';

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
        const response = await fetch(`${API_URL}/api/skills/getSkillCategories/${orgId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching skills category: ${error.message}`);
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
        `${API_URL}/api/skills/addSkillCategory/${categoryName}/${depId}`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error adding skill category: ${error.message}`);
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
        `${API_URL}/api/skills/removeSkillCategory/${skillCatId}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error deleting skill category: ${error.message}`);
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
      const response = await fetch(`${API_URL}/api/skills/updateSkillCategoryName/${skillCatId}/${newName}`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error updating skill category name: ${error.message}`);
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
        `${API_URL}/api/skills/addSkillsToCategory/${skillName}/${skillDescription}/${employeeId}/${skillCategoryId}/${departmentId}`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error adding skill to category: ${error.message}`);
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
        const response = await fetch(`${API_URL}/api/skills/getSkillsByDepartmentAndCategory/${departmentId}/${skillCategoryId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching skills: ${error.message}`);
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
        `${API_URL}/api/skills/removeSkill/${skillId}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      return;
    } catch (error) {
      throw new Error(`Error removing skill: ${error.message}`);
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
      const response = await fetch(`${API_URL}/api/skills/updateSkill/${skillId}/${newSkillName}/${newSkillDescription}`, requestOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
  
      return;
    } catch (error) {
      throw new Error(`Error updating skill: ${error.message}`);
    }
  };

  //https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/addUserSkills/{employeeId}/{skillId}/{proficiencyLevel}/{experience}

  const addUserSkills = async (employeeId,skillId,proficiencyLevel,experience) => {
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
        `${API_URL}/api/skills/addUserSkills/${employeeId}/${skillId}/${proficiencyLevel}/${experience}`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // If you don't need a response, you can simply return without parsing
      return;
    } catch (error) {
      throw new Error(`Error adding skills: ${error.message}`);
    }
  };

  
  const removeUserSkill = async (userSkillId) => {
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
        `${API_URL}/api/skills/removeUserSkill/${userSkillId}`,
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
 
  const getUserSkills = async (employeeId) => {

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
  
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
  
    try {
        const response = await fetch(`${API_URL}/api/skills/getUserSkills/${employeeId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching skills: ${error.message}`);
    }
  };


  const getSkillsByOrganization = async (organizationId) => {

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
  
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
  
    try {
        const response = await fetch(`${API_URL}/api/skills/getSkillsByOrganization/${organizationId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching skills: ${error.message}`);
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
addUserSkills,
removeUserSkill,
getUserSkills,
getSkillsByOrganization,
  };
  export default SkillsAPI;

  /*Skills urile categoriei
Skills urile categoriei
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/addSkillsToCategory/{skillName}/{skillDescription}/{employeeId}/{skillCategoryId}/{departmentId}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/getSkillsByDepartmentAndCategory/{departmentId}/{skillCategoryId}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/getSkillsByOrganization/{organizationId}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/removeSkill/{skillId}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/updateSkill/{skillId}/{newSkillName}/{newSkillDescription}


Userskills:
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/addUserSkills/{employeeId}/{skillId}/{proficiencyLevel}/{experience}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/removeUserSkill/{userSkillId}
https:/atc-2024-letsdoit-be-linux-web-app.azurewebsites.net/getUserSkills/{employeeId}
 */