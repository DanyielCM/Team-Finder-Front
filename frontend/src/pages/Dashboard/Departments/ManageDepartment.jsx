import styles from "./Department.module.css";
import AuthService from "../../../services/auth.service";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dialog } from "primereact/dialog";
import DepartmentService from "../../../services/Department/DepartmentService";
import User from "../../../services/User/UserService";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import DepartmentDetails from "./DepartmentDetails";

export default function ManageDepartment() {

  
  const UnassignedEmployeesTable = ({ onReturnClick }) => {
    const handleReturnClick = () => {
      onReturnClick(); // Call the function passed from the parent component
    };

    return (
      <>
        {" "}
        <h1>Unassigned Employees</h1>
        <Button label="Return" onClick={handleReturnClick} className="p-mb-2" />
        <DataTable value={unassignedUsers} tableStyle={{ minWidth: "67vw" }}>
          <Column field="employeeUserName" header="Employee Name"></Column>
          <Column field="employeeEmail" header="Email"></Column>
          <Column field="projecthours" header="Project Hours"></Column>
          <Column
            field="deleteOption"
            header="Options"
            body={renderAssignOptionsColumn}
          />
        </DataTable>
      </>
    );
  };

  const [visibleAddMembers, setVisibleAddMembers] = useState(false);
  const [visibleAssignDep, setVisibleAssignDep] = useState(false);
  const [department, setDepartment] = useState(false);
  const [member, setMember] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [unassignedUsers, setUnassignedUsers] = useState(null);
  const [showUnassignedEmployees, setShowUnassignedEmployees] = useState(false);
  const [departmentData, setDepartmentData] = useState([
    {
      id: 0,
      departmentName: "",
      departmentDescription: "",
      departmentManager: "",
    },
  ]);

  const orgId = AuthService.getOrgId();

  const accept = () => {
    console.log(department);
    User.assignUserToDepartment(member.employeeId, department.departmentId);
    setVisibleAssignDep(false);
    setDepartment("");
    window.location.reload(false);
  };

  const reject = () => {};

  const onRowSelect = (event) => {
    console.log(event.data);
    const rowIndex = event.rowIndex;
  };

  const renderAssignOptionsColumn = (rowData) => {
    return (
      <Button
        label="Assign to department"
        onClick={() => handleAssignDep(rowData)}
        severity="info"
        raised
      />
    );
  };
  const handleAssignDep = (rowData) => {
    setMember(rowData);
    setDepartment(departmentData[0]);

    setVisibleAssignDep(true);
  };

  const handleReturnClick = () => {
    setSelectedRow(null);
  };

  const handleShowUnassignedEmployees = () => {
    setShowUnassignedEmployees(true);
  };

  const handleReturnClick1 = () => {
    setShowUnassignedEmployees(false);
  };

  const fetchData = () => {
    DepartmentService.getDepartmentByManager()
      .then((data) => {
        setDepartmentData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    User.getUnassignedUsers(orgId)
      .then((data) => {
        console.log("Unassinged:", data);
        setUnassignedUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTable = () => {
    if (showUnassignedEmployees) {
      return <UnassignedEmployeesTable onReturnClick={handleReturnClick1} />;
    } else if (selectedRow) {
      return (
        <DepartmentDetails
          selectedDepartment={selectedRow}
          onReturnClick={handleReturnClick}
        />
      );
    } else {
      return (
        <>
          <Button
            label="Show all unassigned employees"
            onClick={handleShowUnassignedEmployees}
            severity="success"
          />
          <DataTable
            value={departmentData}
            selectionMode="single"
            selection={selectedRow}
            onSelectionChange={(e) => setSelectedRow(e.value)}
            metaKeySelection={false}
            onRowSelect={onRowSelect}
            tableStyle={{ minWidth: "67vw" }}
          >
            <Column header="No." body={(_, { rowIndex }) => rowIndex + 1} />
            <Column field="departmentName" header="Department Name" />
            <Column
              field="departmentDescription"
              header="Department Description"
            />
            <Column field="departmentManager" header="Department Manager" />
          </DataTable>
        </>
      );
    }
  };

  return (
    <div className={styles.background}>
      <h1>Manage Department</h1>

      <div className={styles.btn_container}></div>

      <div className="card">
        {/* Render either the main table or the DepartmentDetails component */}
        {renderTable()}
      </div>

      <ConfirmDialog
        group="declarative"
        visible={visibleAssignDep}
        onHide={() => setVisibleAssignDep(false)}
        message="Are you sure you want to department this memeber?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
    </div>
  );
}
