import styles from "./AssignRole.module.css";
import AuthService from "../../../services/auth.service";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import DepartmentService from "../../../services/Department/DepartmentService";
import User from "../../../services/User/UserService";
import { MultiSelect } from 'primereact/multiselect';


export default function AssignRole() {
    const [visibleUpdateRoles, setVisibleUpdateRoles] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [fetch, setFetch] = useState();
    
    const [roles, setRoles] = useState([
        { id: 1, role: 'Employee', name: 'Employee' },
        { id: 2, role: 'OrganizationAdmin', name: 'Organization Administrator' },
        { id: 52, role: 'DepartmentManager', name: 'Department Manager' },
        { id: 53, role: 'ProjectManager', name: 'Project Manager' },
    ]);
    const [usersData, setUsersData] = useState([
        { employeeId: 0, employeeUserName: "", authorities: "" },
    ]);
    const orgId = AuthService.getOrgId();

    const fetchData = () => {


      User.getUsers()
          .then((users) => {
              setUsersData(users);
              setFetch(false);
          })
          .catch((error) => {
              console.error("Error:", error);
          });
        };

    useEffect(() => {
      fetchData();
      
    }, [fetch]);

    const renderOptionsColumn = (rowData) => {
        return (
            <Button label="Assign Roles" onClick={() => handleAssignRoles(rowData)} severity="info" raised />
        );
    };

    const handleAssignRoles = (rowData) => {
        console.log(selectedUser);
        setSelectedUser(rowData);
        setSelectedRoles(roles.filter(role => rowData.authorities.includes(role.role)));
        setVisibleUpdateRoles(true);
    };

    const handleConfirmUpdateRoles = () => {
      const rolesToAdd = selectedRoles.filter(role => !selectedUser.authorities.includes(role.role));
      const rolesToRemove = selectedUser.authorities.filter(role => !selectedRoles.some(selectedRole => selectedRole.role === role));
      
      rolesToAdd.forEach(role => {
          console.log(role);
         User.addUserRole(selectedUser.employeeId, role.role);
         
        
      });
      
      rolesToRemove.forEach(role => {
        console.log(role);
          // Call function to delete role for each role in rolesToRemove
          User.deleteUserRole(selectedUser.employeeId, role);
          
      });
  
      
      setVisibleUpdateRoles(false);
        setVisibleUpdateRoles(false);
        setFetch(true);
    };
    const renderAuthoritiesCell = (rowData) => {
      if (Array.isArray(rowData.authorities)) {
          return (
              <div>
                  {rowData.authorities.map(authority => (
                      <div key={authority}>{authority}</div>
                  ))}
              </div>
          );
      } else {
          return <div>{rowData.authorities}</div>; // Render authorities as is if not an array
      }
  };
  

    const footerUpdateRoles = (
        <div className={styles.footer_buttons}>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleUpdateRoles(false)} className="p-button-text" />
            <Button label="Confirm" icon="pi pi-check" onClick={handleConfirmUpdateRoles} autoFocus />
        </div>
    );

    return (
        <div className={styles.background}>
            <h1>Employees</h1>
            <div className={styles.btn_container}></div>

            <div className="card">
                <DataTable value={usersData} cellSelection selectionMode="single" 
                   metaKeySelection={false}
                    tableStyle={{ minWidth: '67vw' }}>
                    <Column header="No." body={(_, { rowIndex }) => rowIndex + 1} />
                    <Column field="employeeUserName" header="Name" />
                    <Column field="authorities" header="Administrative Role" body={renderAuthoritiesCell} />
                    <Column field="deleteOption" header="Options" body={renderOptionsColumn} />
                </DataTable>
            </div>

            <Dialog header="Update Administrative role" visible={visibleUpdateRoles} style={{ width: '25vw' }} onHide={() => setVisibleUpdateRoles(false)} footer={footerUpdateRoles}>
                <div className={styles.form_container}>
                    <div className={styles.item}>
                        <MultiSelect value={selectedRoles} onChange={(e) => setSelectedRoles(e.value)} options={roles} optionLabel="name"
                            placeholder="Assign or delete role" maxSelectedLabels={4} className={styles.multiselect} />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
