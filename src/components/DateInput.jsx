import React from 'react';

const DataInput = ({ value, onChange }) => (
  <label>Ім'я:
    <input
      type="date"
      name="birtdate"
      value={value}
            onChange={onChange}
            id="birtdate"
            max="2023-10-25"
      required
    />
  </label>
);

export default DataInput;