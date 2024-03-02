import React, { useState } from 'react';
import Table from "../components/common/Table.jsx";
import "./dashboard.css";





function ProjectDetails({ project, handleReturn }) {
  const membersData = [
      { id: 1, id_pr: 1, name: "John Doe", role: "Developer" },
      { id: 2, id_pr: 1, name: "Jane Smith", role: "Designer" },
      { id: 3, id_pr: 1, name: "Mike Johnson", role: "Tester" },
      { "id": 4, "id_pr": 2, "name": "Emily Brown", "role": "Developer" },
      { "id": 5, "id_pr": 2, "name": "Chris Wilson", "role": "Designer" },
      { "id": 6, "id_pr": 2, "name": "Rachel Lee", "role": "Tester" },
      { "id": 7, "id_pr": 3, "name": "Michael Davis", "role": "Developer" },
      { "id": 8, "id_pr": 3, "name": "Sarah Johnson", "role": "Designer" },
      { "id": 9, "id_pr": 3, "name": "David Martinez", "role": "Tester" },
      { "id": 10, "id_pr": 4, "name": "Alexa Thompson", "role": "Developer" },
      { "id": 11, "id_pr": 4, "name": "Matthew Garcia", "role": "Designer" },
      { "id": 12, "id_pr": 4, "name": "Jennifer White", "role": "Tester" },
      { "id": 13, "id_pr": 5, "name": "Daniel Clark", "role": "Developer" }
  
  
  
  ];

 
  const projectMembers = membersData.filter(member => member.id_pr === project.id);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Role",
      accessor: "role",
    },
   
  ];

  return (
    <div>
      <h2>Project Details</h2>
      <p>ID: {project.id}</p>
      <p>Name: {project.project}</p>
      <p>Number of members: {project.members}</p>
      <button onClick={handleReturn}>Return to Projects</button>

      {/* Display table with members assigned to the project */}
      <h3>Members Assigned to this Project</h3>
      <Table columns={columns} data={projectMembers} />
    </div>
  );
}

export default function Dashboard() {
  const columns = [
    {
      Header: "Departments",
      accessor: "department",
    },
  ];

  const columnsPr = [
  
    {
      Header: "Name of Project",
      accessor: "project",
    },
    {
      Header: "Number of members",
      accessor: "members",
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const data = [
    { id: 1, department: "Frontend", projects: 3 },
    { id: 2, department: "Backend", projects: 5 },
    { id: 3, department: "UI/UX Design", projects: 2 },
  
  ];

  const dataPr = [
    { "id": 1,"id_dep": 1, "department": "Frontend", "project": "Tic-tac-toe", "members": 3 },
    { "id": 2,"id_dep": 2, "department": "Frontend", "project": "Project X", "members": 5 },
    { "id": 3,"id_dep": 2, "department": "Frontend", "project": "Website Redesign", "members": 4 },
    { "id": 4,"id_dep": 2, "department": "Frontend", "project": "Mobile App UI", "members": 6 },
    { "id": 5,"id_dep": 2, "department": "Backend", "project": "Database Optimization", "members": 4 },
    { "id": 6,"id_dep": 2, "department": "Backend", "project": "API Development", "members": 3 },
    { "id": 7,"id_dep": 2, "department": "Backend", "project": "Integration Testing", "members": 5 },
    { "id": 8,"id_dep": 3, "department": "UI/UX Design", "project": "Sales Dashboard", "members": 4 },
    { "id": 8,"id_dep": 3, "department": "UI/UX Design", "project": "E-commerce Site Redesign", "members": 7 },
    { "id": 10,"id_dep": 3, "department": "UI/UX Design", "project": "Product Interface Enhancement", "members": 3 }


  ];

  const handleProjectRowClick = (row) => {
    console.log("Project row clicked:", row.original);
    setSelectedProject(row.original);
  };

  const handleDepartmentRowClick = (row) => {
    console.log("Department row clicked:", row.original);
    const departmentId = row.original.id;
    setSelectedDepartment(row.original.department);
  
    // Filter projects based on the selected department's ID
    const filteredProjects = dataPr.filter(project => project.id_dep === departmentId);
    setFilteredProjects(filteredProjects);
    setSelectedProject(null);
  };

  const handleReturnToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <>
    <div className="dash">
      <div>
        <h1>Departments Table</h1>
        <Table
          columns={columns}
          data={data}
          handleRowClick={handleDepartmentRowClick}
          selectedRow={selectedDepartment}
        />
      </div>
      {selectedDepartment && !selectedProject && (
        <div>
          <h1>{selectedDepartment} Projects Table</h1>
          <Table
            columns={columnsPr}
            data={filteredProjects}
            handleRowClick={handleProjectRowClick}
          />
        </div>
      )}
      {selectedProject && (
        <div>
          <ProjectDetails project={selectedProject} handleReturn={handleReturnToProjects} />
        </div>
      )}
      </div>
    </>
  );
}
