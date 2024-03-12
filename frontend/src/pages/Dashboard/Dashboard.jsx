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
  const [departmentIdToUpdate, setDepartmentIdToUpdate] = useState(null); 

  const orgId = AuthService.getOrgId();
  const orgName = AuthService.getOrgName();

  const [data, setData] = useState([
    { id: 1, depName: "Backend", depManager:"Boicu David" },
    // ...More data
  ]);
  const [selectedNavItem, setSelectedNavItem] = useState("Departments");
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedManager, setSelectedManager] = useState("");

  const [peopleData, setPeopleData] = useState([
    { id: 1, name: "John Doe", roles: ["Department Manager"] },
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

  const handlePeopleRowClick = (row) => {
    setSelectedRowData(row.original);
    if (selectedNavItem === "People") {
      setIsRoleModalOpen(true);
    }
  };



  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleDepartmentUpdateClick = (row) => {
    setInputValue(row.original.depName);
    setSelectedManager(row.original.depManager);
    setDepartmentIdToUpdate(row.original.id);
    setIsDepModalOpen(true);
  };

  const handleCreateDepartment = () => {
    setInputValue("");
    setSelectedManager("");
    setIsDepModalOpen(true);
    setDepartmentIdToUpdate(null);
  };

  const handleModalConfirm = () => {
    const updatedData = [...data];
    if (departmentIdToUpdate !== null) {
      const departmentIndex = updatedData.findIndex(
        (department) => department.id === departmentIdToUpdate
      );
      updatedData[departmentIndex] = {
        ...updatedData[departmentIndex],
        depName: inputValue,
        depManager: selectedManager,
      };
    } else {
      const newDepartment = {
        id: data.length + 1,
        depName: inputValue,
        depManager: selectedManager,
      };
      updatedData.push(newDepartment);
    }
    setData(updatedData);
    setIsDepModalOpen(false);
    setInputValue("");
    setSelectedManager("");
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
    {
      Header: "Department Manager",
      accessor: "depManager",
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
    if (selectedNavItem === "Departments") {
      // Filter out the deleted department from the data state
      setData(data.filter(department => department.id !== row.original.id));
    } else if (selectedNavItem === "People") {
      // Filter out the deleted person from the peopleData state
      setPeopleData(peopleData.filter(person => person.id !== row.original.id));
    }
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
              handleUpdate={handleDepartmentUpdateClick}
             // handleRowClick={handleDepartmentRowClick} 
              handleCreateDepartment={handleCreateDepartment}
              
              showAddButton={true}
            />
          </div>
        )}

        {selectedNavItem === "People" && (
          <div>
          <h2>{selectedNavItem}</h2>
          <DashTable
            columns={columnsPeople}
            data={peopleData}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleRowClick={handlePeopleRowClick} 
            showAddButton={true}
          />
          </div>
        )}
        <DepartmentModal
          isOpen={isDepModalOpen}
          setIsOpen={setIsDepModalOpen}
          title={
            departmentIdToUpdate !== null
              ? "Update Department"
              : "Create a new department"
          }
          inputLabel="Name of department"
          inputValue={inputValue}
          onInputChange={setInputValue}
          onConfirm={handleModalConfirm}
          onCancel={() => setIsDepModalOpen(false)}
          peopleData={peopleData}
          selectedManager={selectedManager}
          setSelectedManager={setSelectedManager}
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
