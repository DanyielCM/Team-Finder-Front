
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import User from "../../../services/User/UserService";
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import styles from "./Department.module.css";

export default function DepartmentDetails({ selectedDepartment,onReturnClick  }) {
 
    const [departmentUsers, setDepartmentUsers] = useState(null); 
    const [deleteRow, setDeleteRow] = useState(false);
    const [user, setUser] = useState(false);
    const [fetch, setFetch] = useState(null);
    
    

    const renderOptionsColumn = (rowData) => {
      return (
        <Button
          className={styles.btn_cancel}
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
     
    };
    const accept = () => {
      User.removeUserFromDepartment(user, selectedDepartment.departmentId)
      setDeleteRow(false)
      setFetch(true);
      
    };

    const reject = () => {setDeleteRow(false)};

    const fetchData = () => {
      
        User.getUsersFromDepartment(selectedDepartment.departmentId)
        .then((users) => {
        
          setDepartmentUsers(users);
          setFetch(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        
    };
  
    useEffect(() => {
      fetchData();

    }, [fetch]);


  
    return (
      <>
       <h2>{selectedDepartment.departmentName+" department members"}</h2>
       
       <Button label="Return to Main Table"  className={styles.btn}  onClick={onReturnClick} />
       <DataTable value={departmentUsers} paginator rows={5}  tableStyle={{ minWidth: "67vw" }}>
      
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
    )
  }