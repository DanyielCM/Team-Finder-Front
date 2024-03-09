import React from 'react';
import { useTable } from 'react-table';

function Table({ columns, data, handleAdd, handleDelete, handleUpdate }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 1px red', background: 'aliceblue', padding: '8px' }}>
                {column.render('Header')}
              </th>
            ))}
            <th style={{ borderBottom: 'solid 1px red', background: 'aliceblue', padding: '8px' }}>Options</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: 'solid 1px gray' }}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: '8px', background: 'papayawhip' }}>
                  {cell.render('Cell')}
                </td>
              ))}
              <td style={{ padding: '8px', background: 'papayawhip' }}>
                <button onClick={() => handleAdd(row)}>Add</button>
                <button onClick={() => handleDelete(row)}>Delete</button>
                <button onClick={() => handleUpdate(row)}>Update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
