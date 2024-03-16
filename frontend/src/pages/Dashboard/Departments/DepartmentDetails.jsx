
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import User from "../../../services/User/UserService";
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
        

export default function DepartmentDetails({ selectedDepartment,onReturnClick  }) {
 
    const [departmentUsers, setDepartmentUsers] = useState(null); 
    const [deleteRow, setDeleteRow] = useState(false);
    const [user, setUser] = useState(false);
    
    

    const renderOptionsColumn = (rowData) => {
      return (
        <Button
          label="Delete"
          onClick={() => handleDelete(rowData)}
          severity="danger"
          raised
        />
      );
    };

    const handleDelete = (rowData) => {
    
    setUser(rowData.employeeId);
      setDeleteRow(true);
      console.log("Deleting row:", rowData);
    };
    const accept = () => {
      User.removeUserFromDepartment(user, selectedDepartment.departmentId)
      window.location.reload(false);
    };

    const reject = () => {};

    const fetchData = () => {
      
        User.getUsersFromDepartment(selectedDepartment.departmentId)
        .then((users) => {
          console.log("Users department details:", users);
          setDepartmentUsers(users);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        
    };
  
    useEffect(() => {
      fetchData();

    }, []);


  
    return (
      <>
       <h2>{selectedDepartment.departmentName+" department members"}</h2>
       
       <Button label="Return to Main Table" onClick={onReturnClick} />
       <DataTable value={departmentUsers}   tableStyle={{ minWidth: "67vw" }}>
      
      <Column field="employeeUserName" header="Employee Name"></Column>
      <Column field="employeeEmail" header="Email"></Column>
      <Column field="projecthours" header="Project Hours"></Column>
      <Column
            field="deleteOption"
            header="Options"
            body={renderOptionsColumn}
          ></Column>
    </DataTable>
    <ConfirmDialog
        group="declarative"
        visible={deleteRow}
        onHide={() => setDeleteRow(false)}
        message="Are you sure you want to delete this memeber?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
      </>
    )
  }