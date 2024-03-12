import React from "react";
import { useTable } from "react-table";
import styles from "./table.module.css";

function Table({
  columns,
  data,
  handleAdd,
  handleDelete,
  handleUpdate,
  handleRowClick,
  showAddButton ,
  showUpdateButton,
  showDeleteButton ,
}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className={styles.table_header} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
            <th className={styles.table_header}>Options</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              className={styles.table_row}
              {...row.getRowProps()}
              onClick={() => handleRowClick(row)} // Attach onClick event handler to invoke handleRowClick
            >
              {row.cells.map((cell) => (
                <td className={styles.table_body} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
              <td className={styles.table_options_body}>

              {showAddButton && (
                  <button onClick={() => handleAdd(row)}>Add</button>
                )}
                {showUpdateButton && (
                  <button onClick={() => handleUpdate(row)}>Update</button>
                )}
                {showDeleteButton && (
                  <button onClick={() => handleDelete(row)}>Delete</button>
                )}
                
               
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

