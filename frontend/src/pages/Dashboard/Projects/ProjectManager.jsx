import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { classNames } from "primereact/utils";
import AuthService from "../../../services/auth.service";
import SkillsService from "../../../services/Skills/SkillsService";
import DepartmentService from "../../../services/Department/DepartmentService";
import ProjectService from "../../../services/Project/ProjectService";
import User from "../../../services/User/UserService";
import styles from "./ProjectManager.module.css";

export default function ProjectManager() {
  const [projects, setProjects] = useState();
  const [skills, setskills] = useState();
  const [members, setMembers] = useState();
  const [projectMembers, setProjectMembers] = useState();

  const [projectName, setProjectName] = useState("");
  const [projectPeriod, setProjectPeriod] = useState("Fixed");
  const [startDate, setStartDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [projectStatus, setProjectStatus] = useState("Not Started");
  const [generalDescription, setGeneralDescription] = useState("");
  const [technologyStack, setTechnologyStack] = useState("");
  const [teamRoles, setTeamRoles] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState(true);

  const [addProjectModalx, setAddProjectModalx] = useState(false);
  const [addTechStack, setAddTechStack] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [findMember, setFindMember] = useState(false);
  const [selectedMember, setSelectedMember] = useState();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  const [deleteProject, setdeleteProject] = useState(false);

  const orgId = AuthService.getOrgId();

  const cars = [
    { id: 1, brand: "Toyota", year: 2020, color: "Red", price: 25000 },
    { id: 2, brand: "Honda", year: 2019, color: "Blue", price: 22000 },
    { id: 3, brand: "Ford", year: 2018, color: "Black", price: 27000 },
    { id: 4, brand: "Chevrolet", year: 2021, color: "White", price: 28000 },
    { id: 5, brand: "BMW", year: 2017, color: "Silver", price: 35000 },
  ];

  const projectPeriod_ = [
    { id: 1, description: "Fixed" },
    { id: 2, description: "Ongoing" },
  ];

  const projectStatus_ = [
    { id: 1, description: "Not Started" },
    { id: 2, description: "In progress" },
    { id: 3, description: "Clossing" },
    { id: 4, description: "Closed" },
  ];

  const collectProjectData = (
    name,
    status,
    startDate,
    endDate,
    projectPeriod
  ) => {
    return {
      name: name,
      status: status,
      startDate: startDate,
      endDate: endDate,
      projectPeriod: projectPeriod,
    };
  };

  function formatDate(date) {
   
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    // Formatting the date
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    return formattedDate;
  }

  const handleConfirmCreateProject = () => {
    console.log(formatDate(startDate));
    console.log(
      collectProjectData(
        projectName,
        projectStatus.description,
        startDate,
        deadlineDate,
        projectPeriod.description
      )
    );
    ProjectService.createProject(
      collectProjectData(
        projectName,
        projectStatus.description,
        formatDate(startDate),
        formatDate(deadlineDate),
        projectPeriod.description
      )
    );
    setAddProjectModalx(false);
  };

  const onRowClick = (event) => {
    setSelectedProject(event.data);
    console.log("Selected project");
  };

  const returnToMainTable = () => {
    setSelectedProject(null);
  };

  const footerAddProject = (
    <div className={styles.footer_buttons}>
      <Button
        className={styles.btn_cancel}
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setAddProjectModalx(false)}
      />
      <Button
        className={styles.btn}
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmCreateProject()}
        autoFocus
      />
    </div>
  );

  const footerAddTechStack = (
    <div className={styles.footer_buttons}>
      <Button
        className={styles.btn}
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setAddTechStack(false)}
      />
      <Button
        className={styles.btn}
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmAddTechStack()}
        autoFocus
      />
    </div>
  );

  const footerAddMember = (
    <div className={styles.footer_buttons}>
      <Button
        className={styles.btn}
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setAddMember(false)}
      />
      <Button
        className={styles.btn}
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmAddMemeber()}
        autoFocus
      />
    </div>
  );

  const onProjectRowSelect = (event) => {
    setSelectedProject(event.data);
    
    ProjectService.findMembers(event.data.projectID)
      .then((members) => {
        setMembers(members);
        console.log("Members:", members);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      ProjectService.getProjectMembers(event.data.projectID)
      .then((members) => {
        setProjectMembers(members);
        console.log(" PR/ Members:", members);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
  };

  const handleAddTechStack = (rowData) => {
    setSelectedProjectData(rowData)
    setAddTechStack(true);
  };

  const handleConfirmAddTechStack = () => {
    ProjectService.addTechStack(selectedProjectData.projectID,selectedTechStack.skillId);
    setAddTechStack(false);
};

const handleConfirmAddMemeber = () => {

  ProjectService.addMember(selectedProject.projectID,selectedMember.employeeID);
  setAddMember(false)
  
};

  const handleDeleteProject = (rowData) => {
    setSelectedProjectData(rowData)
    setdeleteProject(true);
  };

  const accept = () => {
      console.log("Accept");
      ProjectService.removeProject(selectedProjectData.projectID);
      setdeleteProject(false);


  };

  const reject = () => {setdeleteProject(false)};

 

  const renderProjectOptionsColumn = (rowData) => {
    return (
      <>
        <Button
          label="Delete"
          onClick={() => handleDeleteProject(rowData)}
          severity="danger"
          className={styles.btn_cancel}
          raised
        />
        <Button
          label="Add stack"
          onClick={() => handleAddTechStack(rowData)}
          severity="primary"
          className={styles.btn}
          raised
        />
      </>
    );
  };

  const techStackBodyTemplate = (rowData) => {
    if (Array.isArray(rowData.techStack)) {
      return (
        <ul>
          {rowData.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      );
    } else {
      return rowData.techStack; // Display normally if not an array
    }
  };





  const renderMainTable = () => (
    <>
       <div>
          <Button
            className={styles.btn}
            onClick={() => setAddProjectModalx(true)}
            label="Create a project"
          />
          <DataTable
            value={projects}
            selectionMode="single"
              onSelectionChange={(e) => setSelectedProject(e.value)}
              dataKey="id"
              onRowSelect={onProjectRowSelect}
              metaKeySelection={false}
              paginator rows={5}
            tableStyle={{ minWidth: "67vw" }}
          >
            <Column field="name" header="Project Name" />
            <Column field="status" header="Status" />
            <Column field="projectPeriod" header="Period" />
            <Column field="startDate" header="Start Date" />
            <Column field="endDate" header="End Date" />
            <Column
        field="techStack"
        header="Tech Stack"
        body={techStackBodyTemplate}
      />
            <Column
              field="options"
              header="Options"
              body={renderProjectOptionsColumn}
            ></Column>
          </DataTable>
        </div>
    </>
  );

  const renderProjectDetailsTable = () => (
    <div>
    <h3>Project members</h3>
    <div className={styles.b_container}>
      <Button
        className={styles.btn}
        label="Return"
        onClick={returnToMainTable}
      />
       <Button
        className={styles.btn}
        label="Add memebers"
        onClick={() => setAddMember(true)}
      />
      </div>
      
      <DataTable value={projectMembers} tableStyle={{ minWidth: "67vw" }}>
        <Column field="employeeUserName" header="Name" />
        <Column field="employeeEmail" header="Email" />
        
        
      </DataTable>
    </div>
  );


  const fetchData = () => {
    ProjectService.getProjects()
      .then((projects) => {
        setProjects(projects);
        console.log("Projects:", projects);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    SkillsService.getSkillsByOrganization(orgId)
      .then((skills) => {
        setskills(skills);
        console.log("Skills:", skills);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.background}>
      <h1>Manage projects</h1>

      <div className={styles.btn_container}>
       
      </div>
      {selectedProject ? renderProjectDetailsTable() : renderMainTable()}

      <Dialog
        header={"Create a project"}
        visible={addProjectModalx}
        style={{ width: "25vw" }}
        onHide={() => setAddProjectModalx(false)}
        footer={footerAddProject}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <label htmlFor="project-name">Project Name</label>
            </span>
          </div>
          <div className={styles.item}>
            <Dropdown
              value={projectPeriod}
              onChange={(e) => setProjectPeriod(e.value)}
              options={projectPeriod_}
              optionLabel={"description"}
              showClear
              placeholder="Select project period"
              className="w-full md:w-14rem"
            />
          </div>
          <div className={styles.item}>
            <span className="p-float-label">
              <Calendar
                inputId="start_date"
                value={startDate}
                onChange={(e) => setStartDate(e.value)}
              />
              <label htmlFor="start_date">Start date</label>
            </span>
          </div>
          <div className={styles.item}>
            <span className="p-float-label">
              <Calendar
                inputId="deadline_date"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.value)}
              />
              <label htmlFor="deadline_date">Deadline date</label>
            </span>
          </div>
          <div className={styles.item}>
            <Dropdown
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.value)}
              options={projectStatus_}
              optionLabel={"description"}
              showClear
              placeholder="Select project status"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add tech stack"
        visible={addTechStack}
        style={{ width: "25vw" }}
        onHide={() => setAddTechStack(false)}
        footer={footerAddTechStack}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <Dropdown
              value={selectedTechStack}
              onChange={(e) => setSelectedTechStack(e.value)}
              options={skills}
              optionLabel={"skillName"}
              showClear
              placeholder="Select tech stack"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Add memebers"
        visible={addMember}
        style={{ width: "25vw" }}
        onHide={() => setAddMember(false)}
        footer={footerAddMember}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <Dropdown
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.value)}
              options={members}
              optionLabel={(option) => `${option.employeeName} - ${option.employeeSkills}`}
              showClear
              placeholder="Select member"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>

 

      <ConfirmDialog
        group="declarative"
        visible={deleteProject}
        onHide={() => setdeleteProject(false)}
        message="Are you sure you want to delete this project?"
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
    </div>
  );
}
