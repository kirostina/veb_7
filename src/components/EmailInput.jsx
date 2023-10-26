import React from 'react';

const EmailInput = ({ value, onChange }) => (
  <label>Пошта:
    <input
      type="email"
      name="email"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default EmailInput;