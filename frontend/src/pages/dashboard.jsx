import React from "react";
import { useTable } from "react-table";
import Table from "../components/common/Table.jsx";

export default function Dashboard() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Bob Johnson", age: 35 },
  ];

  const handleAdd = (row) => {

    console.log('Add operation for row:', row.original);
  };

  const handleDelete = (row) => {

    console.log('Delete operation for row:', row.original);
  };

  const handleUpdate = (row) => {

    console.log('Update operation for row:', row.original);
  };

  return (
    <>
      <div>
        <h1>Example Table</h1>
        <Table columns={columns} data={data} handleAdd={handleAdd} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </div>
    </>
  );
}
