import React, { useState } from "react";
import "../CustomCss/UserDetailsForm.css";

const UserDetailsForm = ({ onUserDetailsSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    displayName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      onUserDetailsSubmit(formData);
      alert('User Data Saved'); // Pass data to parent
  };

  return (
    <div className="user-details-form">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            htmlFor="firstName"
            className={formData.firstName ? "active" : ""}
          >
            Booking Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="displayName"
            className={formData.displayName ? "active" : ""}
          >
            Display Name *
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            placeholder="Display Name"
            required
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="phone">Whats App Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Whats App Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        {/* <div className="form-group">
          <label>
            Create an account?
            <input
              type="checkbox"
              name="createAccount"
              checked={formData.createAccount}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
