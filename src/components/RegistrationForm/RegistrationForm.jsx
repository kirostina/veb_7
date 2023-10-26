import React, { useState } from 'react';
import { Form, Input, Button } from './RegistartionForm.styled'

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '',  formData.email === '',  formData.phone === '') {
      setError('Заповніть усі обовязкові поля');
      return;
    }

    onSubmit(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
    });

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
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
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

        <Button type="submit">Зареєструватися</Button>
      </Form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default RegistrationForm;