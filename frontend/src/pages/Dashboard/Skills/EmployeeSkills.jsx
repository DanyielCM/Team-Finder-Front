import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { classNames } from "primereact/utils";
import AuthService from "../../../services/auth.service";
import SkillsService from "../../../services/Skills/SkillsService";
import DepartmentService from "../../../services/Department/DepartmentService";
import User from "../../../services/User/UserService";
import styles from "./Skills.module.css";

export default function EmployeeSkills() {
  const orgId = AuthService.getOrgId();
  const user= AuthService.getEmployeeId();

  const levels = [
    { id: 1, description: "Learns" },
    { id: 2, description: "Knows" },
    { id: 3, description: "Does" },
    { id: 4, description: "Helps" },
    { id: 5, description: "Teaches" }
  ];

  const experience = [
    { id: 1, description: "0-6 months" },
    { id: 2, description: "6-12 months" },
    { id: 3, description: "1-2 years" },
    { id: 4, description: "2-4 years" },
    { id: 5, description: "4-7 years" },
    { id: 5, description: "+7 years" }
  ];



  const [skills, setSkills] = useState();
  const [Userskills, setUserSkills] = useState();
  const [selectedSkill, setSelectedSkill] = useState();
  const [skillModal,setSkillModal] = useState(false);
  const [visibleAddSkill, setVisibleAddSkill] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState();
  const [selectedExperience, setSelectedExperience] = useState();
  const [deleteSkill, setDeleteSkill] = useState(false);



 


  const renderOptionsColumn = (rowData) => {
    return (
      <Button
       className={styles.btn}
        label="Assign skill"
        onClick={() => handleAssignSkill(rowData)}
        raised
      />
    );
  };

  const renderDeleteColumn = (rowData) => {
    return (
      <Button
       className={styles.btn_cancel}
        label="Delete skill"
        onClick={() => handleRemoveSkill(rowData)}
        raised
      />
    );
  };

  const handleAssignSkill = (rowData) => {
    setSkillModal(true);
    setSelectedSkill(rowData);
  };

  const handleRemoveSkill = (rowData) => {
    setDeleteSkill(true);
    console.log(rowData);
    setSelectedSkill(rowData);
    
   
  };

  const handleConfirmAddSkill = () => {
    console.log(user);
    SkillsService.addUserSkills(user,selectedSkill.skillId,selectedLevel.id,selectedExperience.description)
    setSelectedExperience("");
    setSelectedLevel("");
    setSkillModal(false);
   
  };

  const accept = () => {
    SkillsService.removeUserSkill(selectedSkill.userSkillId);
    setDeleteSkill("");
    setDeleteSkill(false);


  };

  const reject = () => {setDeleteSkill(false)};

  const footerAddSkill = (
    <div className={styles.footer_buttons}>
      <Button
       className={styles.btn_cancel}
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setSkillModal(false)}
     
      />
      <Button
       className={styles.btn}
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmAddSkill()}
        autoFocus
      />
    </div>
  );




  const fetchData = () => {

    SkillsService.getSkillsByOrganization(orgId)
      .then((skills) => {
        setSkills(skills);
       
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      SkillsService.getUserSkills(user)
      .then((skills) => {
        setUserSkills(skills);
  
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderMainTable = () => (
    <>
      <div>
        <h1>My skills</h1>
        <Button
          className={styles.btn}
          label="Add skill"
          severity="success"
          raised
          onClick={() => setVisibleAddSkill(true)}
        />
        <DataTable value={Userskills} paginator rows={5} tableStyle={{ minWidth: "67vw" }}>
          <Column field="skills" header="Skill Name"></Column>
          <Column
            field="deleteSkillOption"
            header="Options"
            body={renderDeleteColumn}
          ></Column>
          
        </DataTable>
      </div>
    </>
  );

  const renderAddSkillTable = () => (
    <div>
    <h1>Organisation skills</h1>
     <Button
        label="Return"
        className={styles.btn}
        onClick={() => setVisibleAddSkill(false)}
      />
      <DataTable value={skills} paginator rows={5} tableStyle={{ minWidth: "67vw" }}>
        <Column field="skillName" header="Skill Name"></Column>
        <Column field="skillDescription" header="Skill Description"></Column>
        <Column field="authorName" header="Author"></Column>
        <Column
            field="assignSkillOption"
            header="Options"
            body={renderOptionsColumn}
          ></Column>
      </DataTable>
     
    </div>
  );

  return (
    <>
    <div className={styles.background}>
      <h1>Skills</h1>
      <div className={styles.btn_container}>
        {visibleAddSkill ? renderAddSkillTable() : renderMainTable()}
      </div>
    </div>
    <Dialog
        header={"Add skill"}
        visible={skillModal}
        style={{ width: "25vw" }}
        onHide={() => setSkillModal(false)}
        footer={footerAddSkill}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <Dropdown
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.value)}
              options={levels}
              optionLabel={"description"}
              showClear
              placeholder="Select level"
              className="w-full md:w-14rem"
            />
          </div>
          <div className={styles.item}>
            <Dropdown
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.value)}
              options={experience}
              optionLabel={"description"}
              showClear
              placeholder="Select Experience"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>
      <ConfirmDialog
        group="declarative"
        visible={deleteSkill}
        onHide={() => setDeleteSkill(false)}
        message="Are you sure you want to delete this skill?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        footer={
    <div  className={styles.footer_btn}>
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={accept}
        className={styles.btn}
      />
      <Button
        label="No"
        icon="pi pi-times"
        onClick={reject}
        className={styles.btn_cancel}
      />
    </div>
  }
      />
    
    </>
  );
  
}
