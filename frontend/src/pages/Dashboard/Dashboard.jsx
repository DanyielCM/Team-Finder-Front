import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import AuthService from "../../services/auth.service.jsx";



import MainNav from "./MainNav/MainNav.jsx";
import SecondaryNav from "./SecondaryNav/SecondaryNav.jsx";
import Banner from "./Banner/Banner.jsx";
import Department from "./Departments/Department.jsx";
import AssignRole from "./AssignRole/AssignRole.jsx";
import ManageDepartment from "./Departments/ManageDepartment.jsx";
import ManageSkills from "./Skills/ManageSkills.jsx";
import EmployeeSkills from "./Skills/EmployeeSkills.jsx";
import ManageProject from "./Projects/ProjectManager.jsx";
import { Button } from 'primereact/button';

export default function Dashboard() {


  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");
  const [selectedPanelItem, setSelectedPanelItem] = useState(null);
  const defaultSelectedItem = localStorage.getItem("lastOpen") || "Dashboard";
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);
  

  const handlePanelItem = (title) => {
    console.log("Selected Item dash:", title);
    setSelectedItem(title);
    localStorage.setItem("lastOpen", title);
  };

  const handleNavItemSelection = (title) => {
    console.log("Selected Item dash:", title);
    setSelectedItem(title);
    localStorage.setItem("lastOpen", title);
  };
  
  
  return (
    <div className={styles.background}>
   
        <MainNav
          onNavItemSelect={(selectedItem) => handleNavItemSelection(selectedItem)}
        />
        <div>
        {selectedItem === "Dashboard" && <Banner />}
        {selectedItem === "Administrative roles" && <AssignRole />}
        {selectedItem === "Departments" && <Department />}
        {selectedItem === "Manage department" && <ManageDepartment />}
        {selectedItem === "Skills Set" && <ManageSkills />}
        {selectedItem === "My skills" && <EmployeeSkills />}
        {selectedItem === "Create new project" && <ManageProject />}
        </div>
        
        <SecondaryNav onSelectedItem={handlePanelItem}></SecondaryNav>
    </div>
  );
}

