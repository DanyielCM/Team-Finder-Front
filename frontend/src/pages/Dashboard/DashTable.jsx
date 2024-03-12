import React from "react";
import styles from './DashTable.module.css';
import { useTable } from "react-table";
import Table from "../../components/common/table.jsx";

export default function DashTable({ title, columns, data, handleAdd, handleDelete, handleUpdate, handleRowClick }) {
  return (
    <>
      <div>
         <div className={styles.add_departments}>

         </div>
      
        <Table columns={columns} data={data} handleAdd={handleAdd} handleDelete={handleDelete} handleUpdate={handleUpdate} handleRowClick={handleRowClick} />
      </div>
    </>
  );
}
