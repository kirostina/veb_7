import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from './RegistartionForm.styled'
import Inputmask from 'inputmask';

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birtdate: '',
    group: '',
    file: null,
  });
  const [nameError, setNameError] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [error, setError] = useState(null);

  const PhoneInput = ({ value, onChange }) => {
    const mask = '+38(999) -999-99-99';

    useEffect(() => {
      const phoneInput = document.getElementById('phone');
      Inputmask(mask).mask(phoneInput);
    }, [mask]);
  }

  const handleKeyPress = (event) => {
  const charCode = event.charCode;
  if (!/^[A-Za-z]+$/.test(String.fromCharCode(charCode))) {
    event.preventDefault(); // Скасувати введення символу, якщо це не буква
  }
};
const handleNameBlur = () => {
  const namePattern = /^[A-Za-z]+$/; 
  if (!namePattern.test(formData.name)) {
    setNameError('Ім\'я може містити лише букви');
    setNameValid(false);
  } else {
    setNameError('');
    setNameValid(true);
  }
};
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '' ||  formData.email === '' ||  formData.phone === '' || formData.birtdate=== '' || formData.file=== '' || formData.gender==='') {
      setError('Заповніть усі обовязкові поля');
      return;
    }

    onSubmit(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      birtdate: '',
      group: '',
      file: null,
    });
    setNameValid(false);
  setNameError(null);
  setError(null);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
  <label>Ім'я:
  <Input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    onBlur={handleNameBlur}
    onKeyPress={handleKeyPress} 
    required
  />
</label>

        <label>Пошта:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

         <label>Номер телефону:
          <Input
            type="text"  
            name="phone"
            id="phone" 
            value={formData.phone}
            onChange={handleInputChange}
          />
          <PhoneInput value={formData.phone} onChange={handleInputChange} /> 
        </label>

              <label>Стать:
                  <br/>
          <Input
            type="radio"
            name="gender"
            value="Чоловік"
            checked={formData.gender === 'Чоловік'}
            onChange={handleInputChange}
          />
                  Чоловік
                  <br/>
          <Input
            type="radio"
            name="gender"
            value="Жінка"
            checked={formData.gender === 'Жінка'}
            onChange={handleInputChange}
          />
          Жінка
        </label>
        <br/>
        <label>Birtdate:
          <Input
            type="date"
            name="birtdate"
            value={formData.birtdate}
            onChange={handleInputChange}
            required
            max="2023-10-25"
          />
        </label>
        <label>Group:
          <Input
            type="text"
            name="group"
            value={formData.group}
            onChange={handleInputChange}
            required
          />
        </label>
        <br/>
        <label>File:
          <Input
            type="file"
            name="file"
            onChange={handleInputChange}
            required
          />
        </label>

        <Button type="submit">Зареєструватися</Button>
      </Form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default RegistrationForm;