import React, { useState } from 'react';
import {Table, Th, Td} from './UseTable.styled'

function UserTable({ data, onDeleteRows, onDuplicateRows }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  const handleDeleteSelectedRows = () => {
    onDeleteRows(selectedRows);
    setSelectedRows([]);
  };

  const handleDuplicateSelectedRows = () => {
    onDuplicateRows(selectedRows);
    setSelectedRows([]);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Ім'я</Th>
            <Th>Пошта</Th>
            <Th>Номер телефону</Th>
            <Th>Стать</Th>
            <Th>Дата Народження</Th>
            <Th>Група</Th>
            <Th>Файл</Th>
            <Th>Дії</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.gender}</Td>
              <Td>{user.birtdate}</Td>
              <Td>{user.group}</Td>
              <Td>{user.file}</Td>
              <Td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, user.id)}
                  checked={selectedRows.includes(user.id)}
                />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button onClick={handleDeleteSelectedRows}>Видалити вибрані</button>
        <button onClick={handleDuplicateSelectedRows}>Дублювати вибрані</button>
      </div>
    </div>
  );
}

export default UserTable;