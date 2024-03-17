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
    const user = await Api.addSkillCategory(categoryName, depId);
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
    const departments = await Api.removeSkill(skillId);
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

const SkillsService = {
  getSkillCategories,
  addSkillCategory,
  removeSkillCategory,
  updateSkillCategoryName,
  addSkillToCategory,
  getSkillsByDepartmentAndCategory,
  removeSkill,
  updateSkill,
};
export default SkillsService;
