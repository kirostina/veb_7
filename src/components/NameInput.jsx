import React from 'react';

const NameInput = ({ value, onChange }) => (
  <label>Ім'я:
    <input
      type="text"
      name="name"
      value={value}
      onChange={onChange}
      onBlur={handleNameBlur} 
      required
    />
  </label>
);

export default NameInput;