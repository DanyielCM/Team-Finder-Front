import React, { useState } from "react";
import "./form.css";

const Form = ({ title, subtitle, onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-form">
      <div className="title">{title && <p>{title}</p>}</div>
      <div className="form-subtitle">{subtitle && <p>{subtitle}</p>}</div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="form-input-container form-ic1">
            
            <input
              className="form-input"
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              placeholder={field.placeholder || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
