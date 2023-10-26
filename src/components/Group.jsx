import React from 'react';

const Group = ({ value, onChange }) => (
  <label>Ім'я:
    <input
      type="text"
      name="group"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default Group;