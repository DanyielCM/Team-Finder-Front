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
import SkillsService from "../../../services/Skills/SkillsService";
import DepartmentService from "../../../services/Department/DepartmentService";
import User from "../../../services/User/UserService";
import styles from "./Skills.module.css";

export default function ManageSkills() {
  const orgId = localStorage.getItem("orgid");
  const [visibleCreateSkillCat, setVisibleCreateSkillCat] = useState(false);
  const [skillCat, setSkillCat] = useState("");
  const [skillCatData, setSkillCatData] = useState();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showExampleTable, setShowExampleTable] = useState(false);
  const [department, setDepartment] = useState("");

  const [skillsData, setSkillsData] = useState("");
  const [visibleCreateSkill, setVisibleCreateSkill] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skillDescription, setSkillDescription] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [skillCategoryId, setSkillCategoryId] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const [deleteSkillRow, setDeleteSkillRow] = useState(false);
  const [deleteSkillCatRow, setDeleteSkillCatRow] = useState(false);

  const [visibleUpdateSkill, setVisibleUpdateSkill] = useState(false);
  const [visibleDeleteSkill, setVisibleDeleteSkill] = useState(false);
  const [visibleDeleteSkillCat, setVisibleDeleteSkillCatRow] = useState(false);
  const [visibleUpdateSkillCat, setVisibleUpdateSkillCatRow] = useState(false);

  const footerCreateSKillCat = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleCreateSkillCat(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmCreateSkillCat()}
        autoFocus
      />
    </div>
  );

  const footerUpdateSKillCat = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleUpdateSkillCatRow(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmUpdateSkillCat()}
        autoFocus
      />
    </div>
  );

  const footerUpdateSKill = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleUpdateSkill(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmUpdateSkill()}
        autoFocus
      />
    </div>
  );

  const footerCreateSKill = (
    <div className={styles.footer_buttons}>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setVisibleCreateSkill(false)}
        className="p-button-text"
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        onClick={() => handleConfirmCreateSkill()}
        autoFocus
      />
    </div>
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    SkillsService.getSkillCategories(orgId)
      .then((skillsCat) => {
        setSkillCatData(skillsCat);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    DepartmentService.getDepartmentByManager()
      .then((department) => {
        setDepartment(department);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleConfirmCreateSkillCat = () => {
    console.log(skillCat);
    SkillsService.addSkillCategory(skillCat, orgId);
    setVisibleCreateSkillCat(false);
    setSkillCat("");
    window.location.reload(false);
  };

  const handleConfirmUpdateSkillCat = () => {
    SkillsService.updateSkillCategoryName(
      selectedSkill.skillCategoryId,
      skillCat
    );
    setVisibleUpdateSkillCatRow(false);
    setSkillCat("");
    window.location.reload(false);
  };

  const handleConfirmUpdateSkill = () => {
    SkillsService.updateSkill(selectedSkill.skillId,skillName,skillDescription);
    setVisibleUpdateSkill(false);
    setSelectedSkill("");
    window.location.reload(false);
  };

  const handleConfirmCreateSkill = () => {
    SkillsService.addSkillToCategory(
      skillName,
      skillDescription,
      AuthService.getEmployeeId(),
      selectedSkill.skillCategoryId,
      department[0].departmentId
    );
    setVisibleCreateSkill(false);
    window.location.reload(false);
  };

  const onSkillCatRowSelect = (event) => {
    setSelectedSkill(event.data);
    getSkills(department[0].departmentId, event.data.skillCategoryId);
    setShowExampleTable(true);
  };

  const onSkillRowSelect = (event) => {
    setSelectedSkill(event.data);
    setSkillName(event.data.skillName);
    setSkillDescription(event.data.skillDescription);
    setVisibleUpdateSkill(true);
  };

  const renderSkillOptionsColumn = (rowData) => {
    return (
      <Button
        label="Delete"
        onClick={() => handleDeleteSkill(rowData)}
        severity="danger"
        raised
      />
    );
  };

  const renderSkillCatOptionsColumn = (rowData) => {
    return (
      <>
        <Button
          label="Delete"
          onClick={() => handleDeleteSkillCat(rowData)}
          severity="danger"
          raised
        />
        <Button
          label="Edit category"
          onClick={() => handleUpdateSkillCat(rowData)}
          severity="primery"
          raised
        />
      </>
    );
  };

  const handleDeleteSkill = (rowData) => {
    setSelectedSkill(rowData);
    setVisibleDeleteSkill(true);
  };

  const acceptRemoveSkill = () => {
    SkillsService.removeSkill(selectedSkill.skillId);
    window.location.reload(false);
  };

  const handleDeleteSkillCat = (rowData) => {
    setSelectedSkill(rowData);
    setVisibleDeleteSkillCatRow(true);
  };

  const handleUpdateSkillCat = (rowData) => {
    setSkillCat(rowData.skillCategoryName);
    setSelectedSkill(rowData);
    setVisibleUpdateSkillCatRow(true);
  };

  const acceptRemoveSkillCat = () => {
    SkillsService.removeSkillCategory(selectedSkill.skillCategoryId);
    window.location.reload(false);
  };

  const reject = () => {};

  const getSkills = (departmentId, skillCategoryId) => {
    SkillsService.getSkillsByDepartmentAndCategory(
      departmentId,
      skillCategoryId
    )
      .then((skills) => {
        console.log(skills);
        setSkillsData(skills);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const returnToMainTable = () => {
    setShowExampleTable(false);
    setSelectedSkill(null);
  };

  return (
    <div className={styles.background}>
      <h1>Manage Skills</h1>

      <div className="card">
        {showExampleTable ? (
          <div>
            <Button
              label="Return to Main Table"
              onClick={returnToMainTable}
              className="p-button-secondary"
            />
            <div className={styles.btn_container}>
              {" "}
              <Button
                label="Add skill"
                onClick={() => setVisibleCreateSkill(true)}
                severity="success"
              />
            </div>
            <DataTable
              value={skillsData}
              selectionMode="single"
              onSelectionChange={(e) => setSelectedSkill(e.value)}
              dataKey="id"
              onRowSelect={onSkillRowSelect}
              metaKeySelection={false}
              tableStyle={{ minWidth: "67vw" }}
            >
              <Column field="skillName" header="Skill Name"></Column>
              <Column
                field="skillDescription"
                header="Skill Description"
              ></Column>
              <Column
                field="employeeId.employeeUserName"
                header="Author"
              ></Column>
              <Column
                field="department.departmentName"
                header="Department"
              ></Column>
              <Column
                field="skillCategoryId.skillCategoryName"
                header="Skill Category"
              ></Column>
              <Column
                field="deleteOption"
                header="Options"
                body={renderSkillOptionsColumn}
              ></Column>
            </DataTable>
          </div>
        ) : (
          <>
            <div className={styles.btn_container}>
              {" "}
              <Button
                label="Create skill category"
                onClick={() => setVisibleCreateSkillCat(true)}
                severity="success"
              />
            </div>
            <DataTable
              value={skillCatData}
              selectionMode="single"
              onSelectionChange={(e) => setSkillCat(e.value)}
              dataKey="id"
              onRowSelect={onSkillCatRowSelect}
              metaKeySelection={false}
              tableStyle={{ minWidth: "67vw" }}
            >
              <Column
                field="skillCategoryName"
                header="Skills Category"
              ></Column>
              <Column
                field="deleteOption"
                header="Options"
                body={renderSkillCatOptionsColumn}
              ></Column>
            </DataTable>
          </>
        )}
      </div>

      <Dialog
        header="Create a skill category"
        visible={visibleCreateSkillCat}
        style={{ width: "25vw" }}
        onHide={() => setVisibleCreateSkillCat(false)}
        footer={footerCreateSKillCat}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-cat"
                value={skillCat}
                onChange={(e) => setSkillCat(e.target.value)}
              />
              <label htmlFor="skill-cat">Skill Category</label>
            </span>
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Update skill name category"
        visible={visibleUpdateSkillCat}
        style={{ width: "25vw" }}
        onHide={() => setVisibleUpdateSkillCatRow(false)}
        footer={footerUpdateSKillCat}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-cat"
                value={skillCat}
                onChange={(e) => setSkillCat(e.target.value)}
              />
              <label htmlFor="skill-cat">Skill Category</label>
            </span>
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Create skill "
        visible={visibleCreateSkill}
        style={{ width: "25vw" }}
        onHide={() => setVisibleCreateSkill(false)}
        footer={footerCreateSKill}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
              <label htmlFor="skill-name">Skill Name</label>
            </span>
          </div>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-description"
                value={skillDescription}
                onChange={(e) => setSkillDescription(e.target.value)}
              />
              <label htmlFor="skill-description">Skill Description</label>
            </span>
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Update skill "
        visible={visibleUpdateSkill}
        style={{ width: "25vw" }}
        onHide={() => setVisibleUpdateSkill(false)}
        footer={footerUpdateSKill}
      >
        <div className={styles.form_container}>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
              <label htmlFor="skill-name">Skill Name</label>
            </span>
          </div>
          <div className={styles.item}>
            <span className="p-float-label">
              <InputText
                className={styles.input_field}
                id="skill-description"
                value={skillDescription}
                onChange={(e) => setSkillDescription(e.target.value)}
              />
              <label htmlFor="skill-description">Skill Description</label>
            </span>
          </div>
        </div>
      </Dialog>
      <ConfirmDialog
        group="declarative"
        visible={visibleDeleteSkill}
        onHide={() => setVisibleCreateSkill(false)}
        message="Are you sure you want to delete this skill category?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={acceptRemoveSkill}
        reject={reject}
      />
      <ConfirmDialog
        group="declarative"
        visible={visibleDeleteSkillCat}
        onHide={() => setVisibleDeleteSkillCatRow(false)}
        message="Are you sure you want to delete this skill?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={acceptRemoveSkillCat}
        reject={reject}
      />
    </div>
  );
}
