import React from 'react';

const FileInput = ({ value, onChange }) => (
  <label>File:
    <input
      type="file"
      name="file"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);
const handleFileChange = (event) => {
  const file = event.target.files[0]; 
  setFormData({ ...formData, file });
};

export default FileInput;