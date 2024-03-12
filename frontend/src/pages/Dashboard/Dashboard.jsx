import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import MainNav from "./MainNav/MainNav.jsx";
import SecondaryNav from "./SecondaryNav/SecondaryNav.jsx";
import Banner from "./Banner/Banner.jsx";
import DashTable from "./DashTable.jsx";
import DepartmentModal from "../../components/common/Modal/CreateDepModal.jsx";
import AssignRoleModal from "../../components/common/Modal/AssignRoleModal.jsx";
import AuthService from "../../services/auth.service";

export default function Dashboard() {
  const [isDepModalOpen, setIsDepModalOpen] = useState(false); 
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false); 
  const [inputValue, setInputValue] = useState("");

  const orgId = AuthService.getOrgId();
  const orgName = AuthService.getOrgName();

  const [data, setData] = useState([
    { id: 1, depName: "Backend", projects: 30 },
    // ...More data
  ]);
  const [selectedNavItem, setSelectedNavItem] = useState("Departments");
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const [peopleData, setPeopleData] = useState([
    { id: 1, name: "John Doe", roles: ["Employee"] },
    { id: 2, name: "Jane Smith", roles: ["Employee"] },
    
  ]);

  const handleConfirm = (option) => {
    console.log("Selected option:", option);
    
    const selectedIndex = peopleData.findIndex(
      (person) => person.id === selectedRowData.id
    );
    if (selectedIndex !== -1) {
     
      if (!peopleData[selectedIndex].roles.includes(option)) {
       
        const updatedPeopleData = [...peopleData];
       
        updatedPeopleData[selectedIndex] = {
          ...updatedPeopleData[selectedIndex],
          roles: [...updatedPeopleData[selectedIndex].roles, option], 
        };
        
        setPeopleData(updatedPeopleData);
      } else {
        console.log("Role already exists for the person.");
      }
    }
    setIsRoleModalOpen(false); 
  };

  const handleCreateDepartment = () => {
    setIsDepModalOpen(true); 
    setIsRoleModalOpen(false); 
  };

  const handleRowClick = (row) => {
    setSelectedRowData(row.original);
    if (selectedNavItem === "People") {
      setIsRoleModalOpen(true);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleModalConfirm = () => {
    const newDepartment = { id: data.length + 1, depName: inputValue };
    setData([...data, newDepartment]);
    setIsDepModalOpen(false);
  };

  const columnsDepartments = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Department Name",
      accessor: "depName",
    },
    
  ];

  const columnsPeople = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Roles",
      accessor: "roles",
      Cell: ({ value }) => (
        <ul>
          {value.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      ),
    },
   
  ];

  const options = [
    "Organisation Admin",
    "Department Manager",
    "Project Manager",
    "Employee",
  ];

  const handleAdd = (row) => {
    console.log("Add operation for row:", row.original);
  };

  const handleDelete = (row) => {
    console.log("Delete operation for row:", row.original);
  };

  const handleUpdate = (row) => {
    console.log("Update operation for row:", row.original);
  };

  return (
    <div className={styles.background}>
      <div className="dashboard-left-container">
        <MainNav
          onNavItemSelect={(selectedItem) => setSelectedNavItem(selectedItem)}
        />
      </div>
      <div className={styles.dashboardcc}>
        <h2>
          <a href={"/register-user?id=" + orgId + "&organisation=" + orgName}>
            Get Employee URL
          </a>
        </h2>
        <Banner></Banner>

        {selectedNavItem === "Departments" && (
          <div>
            <div className={styles.tableheader}>
              <h2>{selectedNavItem}</h2>
              <button onClick={handleCreateDepartment}>
                Create department
              </button>
            </div>
            <DashTable
            
              columns={columnsDepartments}
              data={data}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleRowClick={handleRowClick}
              showAddButton={true}
            />
          </div>
        )}

        {selectedNavItem === "People" && (
          <div>
          <h2>{selectedNavItem}</h2>
          <DashTable
            title="People"
            columns={columnsPeople}
            data={peopleData}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleRowClick={handleRowClick} 
            showAddButton={true}
          />
          </div>
        )}
        <DepartmentModal
          isOpen={isDepModalOpen}
          setIsOpen={setIsDepModalOpen}
          title="Create a new department"
          inputLabel="Name of department"
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onConfirm={handleModalConfirm}
          onCancel={() => setIsDepModalOpen(false)}
        />
        <AssignRoleModal
          isOpen={isRoleModalOpen}
          setIsOpen={setIsRoleModalOpen}
          title="Select a Role"
          options={options}
          onCancel={() => setIsRoleModalOpen(false)}
          onConfirm={handleConfirm}
        />
      </div>
      <div className={styles.dashboardrc}>
        <SecondaryNav></SecondaryNav>
      </div>
    </div>
  );
}
