import Api from "./SkillsAPI.service.jsx";

function getSkillCategories(orgId) {
  return Api.getSkillCategories(orgId)
    .then((skills) => {
      return skills;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

async function addSkillCategory(categoryName, depId) {
  try {
    const skill = await Api.addSkillCategory(categoryName, depId);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function removeSkillCategory(skillCatId) {
  try {
    const skill = await Api.removeSkillCategory(skillCatId);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

async function updateSkillCategoryName(skillCatId, newName) {
  try {
    const skill = await Api.updateSkillCategoryName(skillCatId, newName);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function addSkillToCategory(
  skillName,
  skillDescription,
  employeeId,
  skillCategoryId,
  departmentId
) {
  try {
    const user = await Api.addSkillToCategory(
      skillName,
      skillDescription,
      employeeId,
      skillCategoryId,
      departmentId
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function getSkillsByDepartmentAndCategory(departmentId, skillCategoryId) {
  return Api.getSkillsByDepartmentAndCategory(departmentId, skillCategoryId)
    .then((skills) => {
      return skills;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

async function removeSkill(skillId) {
  try {
    const skill = await Api.removeSkill(skillId);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

async function updateSkill(skillId, newSkillName, newSkillDescription) {
  try {
    const skill = await Api.updateSkill(
      skillId,
      newSkillName,
      newSkillDescription
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function addUserSkills(employeeId,skillId,proficiencyLevel,experience) {
  try {
    const skill = await Api.addUserSkills(employeeId,skillId,proficiencyLevel,experience);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
async function removeUserSkill(userSkillId) {
  try {
    const skill = await Api.removeUserSkill(userSkillId);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}
async function getUserSkills(employeeId) {
  return Api.getUserSkills(employeeId)
    .then((skills) => {
      return skills;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

async function getSkillsByOrganization(organisationId) {
  return Api.getSkillsByOrganization(organisationId)
    .then((skills) => {
      return skills;
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

const SkillsService = {
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
export default SkillsService;
