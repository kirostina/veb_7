import React from 'react';

const NameInput = ({ value, onChange }) => (
  <label>Ім'я:
    <input
      type="text"
      name="name"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default NameInput;