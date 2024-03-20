// Form.jsx
import React, { useState } from "react";
import "./form.css";

const Form = ({ title, subtitle, onSubmit, fields }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
        valid = false;
      } else {
        const fieldValue = formData[field.name];
        const firstChar = fieldValue.charAt(0);

        if (/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(firstChar)) {
          newErrors[
            field.name
          ] = `${field.label} cannot begin with a number or special character`;
          valid = false;
        } else if (fieldValue.length < 3) {
          newErrors[
            field.name
          ] = `${field.label} must be at least 3 characters`;
          valid = false;
        } else if (
          field.name === "employeeEmail" &&
          !/\S+@\S+\.\S+/.test(fieldValue)
        ) {
          newErrors[field.name] = "Invalid email address";
          valid = false;
        } else if (field.name === "employeePassword") {
          if (fieldValue.length < 5) {
            newErrors[field.name] =
              "Password must be at least 5 characters long";
            valid = false;
          } else if (!/\d/.test(fieldValue)) {
            newErrors[field.name] = "Password must contain at least one number";
            valid = false;
          } else if (!/[A-Z]/.test(fieldValue)) {
            newErrors[field.name] =
              "Password must contain at least one uppercase letter";
            valid = false;
          } else if (
            !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fieldValue)
          ) {
            newErrors[field.name] =
              "Password must contain at least one special character";
            valid = false;
          }
        }
      }
    });

    if (!valid) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className="container">
      <div className="form-form">
        <div className="title">{title && <p>{title}</p>}</div>
        <div className="form-subtitle">{subtitle && <p>{subtitle}</p>}</div>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="form-input-container form-ic1">
              <div>
                <input
                  className="form-input"
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  placeholder={field.placeholder || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="error-container">
                {errors[field.name] && <div>{errors[field.name]}</div>}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="form-submit"
            disabled={!Object.keys(errors).length}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="logo-container">
        <img
          className="logo-img"
          src="/assets/auth-logo-orange.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Form;
