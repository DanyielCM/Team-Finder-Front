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
import DepartmentService from "../../../services/Department/DepartmentService";
import User from "../../../services/User/UserService";
import styles from "./Department.module.css";

export default function Department() {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUdateName, setVisibleUpdateName] = useState(false);
  const [visibleUpdateDesc, setVisibleUpdateDesc] = useState(false);
  const [visibleUpdateManager, setVisibleUpdateMananger] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleteRow, setDeleteRow] = useState(false);
  const [departmentId, setDepartmentId] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDesc, setDepartmentDesc] = useState("");
  const [departmentManager, setDepartmentManager] = useState("");
  const [selectedCell, setSelectedCell] = useState(null);

  const [departmentData, setDepartmentData] = useState([
    {
      id: 0,
      departmentName: "",
      departmentDescription: "",
      departmentManager: "",
    },
  ]);

  const orgId = AuthService.getOrgId();

  const [usersData, setUsersData] = useState([
    {
      employeeId: 0,
      employeeUserName: "",
      authorities: "",
    },
  ]);
  
  const collectDepartmentData = (name, description, depManager, orgId) => {
    return {
      departmentName: name,
      departmentDescription: description,
      departmentManager: depManager,
      organizationId: orgId,
    };
  };

  const handleConfirmCreate = () => {
    const confirm = DepartmentService.createDepartment(
      collectDepartmentData(
        departmentName,
        departmentDesc,
        departmentManager.employeeId,
        orgId
      )
    );

    setVisibleCreate(false);
    setDepartmentName("");
    setDepartmentDesc("");
    setDepartmentId(null);
    setDepartmentManager("");
    fetchData();
    window.location.reload(false);
  };

  const handleConfirmUpdateName = () => {
    DepartmentService.updateDepartmentName(departmentId, departmentName);
    setVisibleUpdateName(false);
    window.location.reload(false);
  };

  const handleConfirmUpdateDesc = () => {
    DepartmentService.updateDepartmentDescription(departmentId, departmentDesc);
    setVisibleUpdateDesc(false);
    window.location.reload(false);
  };

  const handleConfirmUpdateManager = () => {
    DepartmentService.changeDepartmentManager(
      departmentId,
      departmentManager.employeeId
    );
    setVisibleUpdateMananger(false);
    window.location.reload(false);
  };

  const accept = () => {
    DepartmentService.deleteDepartment(departmentId);
    window.location.reload(false);
  };

  const reject = () => {};

  const onCellSelect = (event) => {
    console.log(event.field);
    const rowIndex = event.rowIndex;
    const selectedDepartment = departmentData[rowIndex];
    const selectedDepartmentId = selectedDepartment.departmentId;
    if (event.field === "departmentName") {
      setDepartmentName(event.value);
      setDepartmentId(selectedDepartmentId);
      setVisibleUpdateName(true);
    } else if (event.field === "departmentDescription") {
      setDepartmentDesc(event.value);
      setDepartmentId(selectedDepartmentId);
      setVisibleUpdateDesc(true);
    } else if (event.field === "departmentManager") {
      setDepartmentManager(event.value);
      setDepartmentId(selectedDepartmentId);
      setVisibleUpdateMananger(true);
    }
  };

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
    setDepartmentManager(event.value);
    setDepartmentId(rowData.departmentId);
    setDeleteRow(true);
    console.log("Deleting row:", rowData);
  };

  const fetchData = () => {
    DepartmentService.getDepartments()
      .then((parsedData) => {
        setDepartmentData(parsedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    User.getUsersByRoles(orgId, "DepartmentManager")
      .then((users) => {
        console.log("Users:", users);
        setUsersData(users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const footerCreate = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleCreate(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmCreate()}
        autoFocus
      />
    </div>
  );
  
  const footerUpdateName = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleUpdateName(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmUpdateName()}
        autoFocus
      />
    </div>
  );
  
  const footerUpdateDesc = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleUpdateDesc(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmUpdateDesc()}
        autoFocus
      />
    </div>
  );
  
  const footerUpdateManager = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleUpdateMananger(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmUpdateManager()}
        autoFocus
      />
    </div>
  );

  return (
    <div className={styles.background}>
      <h1>Departments</h1>
      <div className={styles.btn_container}>
        <Button
          className={styles.btn}
          label="Create Department"
          severity="success"
          raised
          onClick={() => setVisibleCreate(true)}
        />
      </div>

      <div className="card">
        <DataTable
          value={departmentData}
          cellSelection
          selectionMode="single"
          selection={selectedCell}
          onSelectionChange={(e) => setSelectedCell(e.value)}
          metaKeySelection={false}
          onCellSelect={onCellSelect}
          tableStyle={{ minWidth: "67vw" }}
        >
          <Column header="No." body={(_, { rowIndex }) => rowIndex + 1} />
          <Column field="departmentName" header="Department Name"></Column>
          <Column
            field="departmentDescription"
            header="Department Description"
          ></Column>
          <Column
            field="departmentManager"
            header="Department Manager"
          ></Column>
          <Column
            field="deleteOption"
            header="Options"
            body={renderOptionsColumn}
          ></Column>
        </DataTable>
      </div>
      <Dialog
        header="Create a department"
        visible={visibleCreate}
        style={{ width: "25vw" }}
        onHide={() => setVisibleCreate(false)}
        footer={footerCreate}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="departemnt-name"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              <label htmlFor="department-name">Department name</label>
            </span>
          </div>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="departemnt-description"
                value={departmentDesc}
                onChange={(e) => setDepartmentDesc(e.target.value)}
              />
              <label htmlFor="department-description">
                Department description
              </label>
            </span>
          </div>
          <div className={styles.item}>
            <Dropdown
              value={departmentManager}
              onChange={(e) => setDepartmentManager(e.value)}
              options={usersData}
              optionLabel={"employeeUserName"}
              showClear
              placeholder="Select a Department Manager"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Update department name"
        visible={visibleUdateName}
        style={{ width: "25vw" }}
        onHide={() => setVisibleUpdateName(false)}
        footer={footerUpdateName}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="departemnt-name"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              <label htmlFor="department-name">Department name</label>
            </span>
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Update department description"
        visible={visibleUpdateDesc}
        style={{ width: "25vw" }}
        onHide={() => setVisibleUpdateDesc(false)}
        footer={footerUpdateDesc}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="departemnt-name"
                value={departmentDesc}
                onChange={(e) => setDepartmentDesc(e.target.value)}
              />
              <label htmlFor="department-name">Department description</label>
            </span>
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Update department manager"
        visible={visibleUpdateManager}
        style={{ width: "25vw" }}
        onHide={() => setVisibleUpdateMananger(false)}
        footer={footerUpdateManager}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
          <Dropdown
              value={departmentManager}
              onChange={(e) => setDepartmentManager(e.value)}
              options={usersData}
              optionLabel={"employeeUserName"}
              showClear
              placeholder="Select a Department Manager"
              className="w-full md:w-14rem"
            />
          </div>
        </div>
      </Dialog>

      <ConfirmDialog
        group="declarative"
        visible={deleteRow}
        onHide={() => setDeleteRow(false)}
        message="Are you sure you want to delete this deparment?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
    </div>
  );
}
