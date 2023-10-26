import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import UserTable from './UserTable/UserTable';

export function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Date.now(), ...userData },
    ]);
  };

  const handleDeleteRows = (rowIds) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !rowIds.includes(user.id))
    );
  };

  const handleDuplicateRows = (rowIds) => {
    const newUsers = users.filter((user) => rowIds.includes(user.id));
    const duplicatedUsers = newUsers.map((user) => ({
      ...user,
      id: Date.now(),
    }));
    setUsers((prevUsers) => [...prevUsers, ...duplicatedUsers]);
  };

  return (
    <div>
      <h1>Реєстрація користувачів</h1>
      <RegistrationForm onSubmit={handleFormSubmit} />
      <UserTable
        data={users}
        onDeleteRows={handleDeleteRows}
        onDuplicateRows={handleDuplicateRows}
      />
    </div>
  );
}

export default App;