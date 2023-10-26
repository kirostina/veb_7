import React, { useEffect } from 'react';
import Inputmask from 'inputmask';

const PhoneInput = ({ value, onChange }) => {
  const mask = '+38(0\\9\\9) -999-99-99';

  useEffect(() => {
    const phoneInput = document.getElementById('phone');
    Inputmask(mask).mask(phoneInput);
  }, [mask]);

  return (
    <label>Номер телефону:
      <input
        id="phone"
        type="text"
        name="phone"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default PhoneInput;