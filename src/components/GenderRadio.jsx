import React from 'react';

const GenderRadio = ({ value, onChange }) => (
  <label>Стать:
    <input
      type="radio"
      name="gender"
      value="Чоловік"
      checked={value === 'Чоловік'}
      onChange={onChange}
    />
    Чоловік
    <input
      type="radio"
      name="gender"
      value="Жінка"
      checked={value === 'Жінка'}
      onChange={onChange}
    />
    Жінка
  </label>
);

export default GenderRadio;