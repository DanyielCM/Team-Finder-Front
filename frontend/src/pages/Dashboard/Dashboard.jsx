import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import MainNav from "./MainNav/MainNav.jsx";
import SecondaryNav from "./SecondaryNav/SecondaryNav.jsx";
import Banner from "./Banner/Banner.jsx";
import DashTable from "../../components/common/Table.jsx";
import DepartmentModal from "../../components/common/Modal/CreateDepModal.jsx";
import AssignRoleModal from "../../components/common/Modal/AssignRoleModal.jsx";
import UpdateDepNameModal from "../../components/common/Modal/UpdateDepNameModal.jsx";
import AuthService from "../../services/auth.service";
import Api from "../../services/Deapartment_Admin/DepartmentAPI.service";
import axios from "axios";
import DepartmentService from "../../services/Deapartment_Admin/DepartmentService";


import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from 'primereact/inputswitch';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   

export default function Dashboard() {
  const [isDepModalOpen, setIsDepModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isUpdateDepModalOpen, setIsUpdateModalOpen] = useState(false);

  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");
  const [departmentIdToUpdate, setDepartmentIdToUpdate] = useState(null);

  const [metaKey, setMetaKey] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const orgId = AuthService.getOrgId();
  const orgName = AuthService.getOrgName();

  const [data, setData] = useState([
    {
      id: 0,
      departmentName: "",
      departmentDescription: "",
      departmentManager: "",
    },
    // ...More data
  ]);

  const [formData, setFormData] = useState({
    departmentName: "",
    departmentDescription: "",
    selectedManager: "",
  });

  const [selectedNavItem, setSelectedNavItem] = useState("Departments");
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedManager, setSelectedManager] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [peopleData, setPeopleData] = useState([
    { id: 3, name: "Boicu David", roles: ["Employee"] },
    { id: 52, name: "Ionescu Andrei", roles: ["Employee"] },
    { id: 54, name: "Boicu Alin", roles: ["Employee"] },
  ]);

  function rolesBody(rowData) {
    return rowData.roles.join(', ');
}

  function parseDepartmentData(jsonData) {
    return jsonData.map((department) => ({
      departmentId: department.departmentId,
      departmentName: department.departmentName,
      departmentDescription: department.departmentDescription,
      departmentManager: department.departmentManager.employeeUserName,
    }));
  }

  const departmentsData = {};

  const columns = React.useMemo(
    () => [
      {
        Header: "Department Name",
        accessor: "departmentName",
      },
      {
        Header: "Description",
        accessor: "departmentDescription",
      },
      {
        Header: "Department Manager",
        accessor: "departmentManager",
      },
    ],
    []
  );

  const createDepartment = (newDepartment) => {};

  const handleConfirmDepartment = (departmentData) => {
    const organizationId = Number(localStorage.getItem("orgid"));
    const newDepartment = { ...departmentData, organizationId };
    console.log(newDepartment);
    DepartmentService.createDepartment(newDepartment)
      .then((isCreated) => {
        if (isCreated) {
          getDepartments();
          alert("Success");
        } else {
          console.error("Failed to create department.");
        }
      })
      .catch((error) => {
        console.error("Error during creation of dep:", error);
      });

    getDepartments();
    setDepartmentName("");
    setDepartmentDescription("");
    setSelectedManager();

    setIsModalOpen(false);
  };

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

  const handleCreateDepartment = () => {
    setDepartmentName("");
    setDepartmentDescription("");
    setSelectedManager("");
    setIsDepModalOpen(true);
    setDepartmentIdToUpdate(null);
  };

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
    console.log("Add action for row: ", row);
  };
  const handleUpdate = (row) => {
    setDepartmentName(row.departmentName);
    setDepartmentIdToUpdate(row.departmentId);
    console.log(departmentIdToUpdate);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (departmentId) => {
    console.log("Deleting department with ID:", departmentId);
    DepartmentService.deleteDepartment(departmentId);

    window.location.reload();
  };

  const handleCancel = () => {
    setIsUpdateModalOpen(false);
  };

  const handleDepNameChange = (name) => {
    setDepartmentName(name);
  };

  const handleUpdateConfirm = () => {
    DepartmentService.updateDepartment(departmentIdToUpdate, departmentName);
    setIsUpdateModalOpen(false);
    window.location.reload();
  };

  const products = [
    { id: 1, code: "001", name: "Product A", category: "Category X", quantity: 10 },
    { id: 2, code: "002", name: "Product B", category: "Category Y", quantity: 15 },
    { id: 3, code: "003", name: "Product C", category: "Category Z", quantity: 20 },
    // Add more products as needed
]

  useEffect(() => {
    DepartmentService.getDepartments()
      .then((parsedData) => {
        setData(parsedData); // You will get parsed department data here
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors that occurred during the process
      });
  }, []);

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
              <button onClick={() => setIsModalOpen(true)}>
                Create Department
              </button>
            </div>
            <DashTable
              columns={columns}
              data={data}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleCreateDepartment={handleCreateDepartment}
              showAddButton={true}
            />
          </div>
        )}

        {selectedNavItem === "People" && (
          <div>
            <h2>{selectedNavItem}</h2>
            <div>
            <div>
            <DataTable value={peopleData} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="roles" header="Roles" body={rolesBody}></Column>
            </DataTable>
        </div>
        </div>
          </div>
        )}
        <DepartmentModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onConfirm={handleConfirmDepartment}
          onCancel={() => setIsModalOpen(false)}
          title="Add New Department"
          peopleData={peopleData}
          departmentName={formData.departmentName}
          departmentDescription={formData.departmentDescription}
          onDepNameChange={(value) =>
            setFormData({ ...formData, departmentName: value })
          }
          onDepDescChange={(value) =>
            setFormData({ ...formData, departmentDescription: value })
          }
          selectedManager={formData.selectedManager}
          setSelectedManager={(value) =>
            setFormData({ ...formData, selectedManager: Number(value) })
          }
        />
        <UpdateDepNameModal
          isOpen={isUpdateDepModalOpen}
          setIsOpen={setIsDepModalOpen}
          onConfirm={handleUpdateConfirm}
          onCancel={handleCancel}
          title="Update Department Name"
          inputLabel="Department Name"
          departmentName={departmentName}
          onDepNameChange={handleDepNameChange}
        />

        <AssignRoleModal
          isOpen={isRoleModalOpen}
          setIsOpen={setIsRoleModalOpen}
          title="Select a Role"
          options={options}
          onCancel={() => setIsRoleModalOpen(false)}
          onConfirm={handleUpdateConfirm}
        />
      </div>
      <div className={styles.dashboardrc}>
        <SecondaryNav></SecondaryNav>
      </div>
    </div>
  );
}
