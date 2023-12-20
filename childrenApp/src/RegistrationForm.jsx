// Import necessary dependencies from React
import React, { useState } from 'react';

// Import the ListView component
import ListView from './ListView.jsx';

// Import the CSS styles for the component
import './app.css'

// Define the RegistrationForm functional component
const RegistrationForm = () => {
  // Use the useState hook to manage form data, errors, and registrations
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    age:'',
    gender:'',
    immunizations: [],
  });

  const [errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    age:''
  });

  const [registrations, setRegistrations] = useState([]);

  // Function to validate the form data
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate first name
    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should contain only letters';
      valid = false;
      console.log('Invalid: Non-letter characters detected');
    } else {
      newErrors.firstName ='';
      console.log('Valid: Only letters detected');
    }
    
    

    // Validate last name
    if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should contain only letters';
      valid = false;
      console.log('Invalid: Non-letter characters detected in last name');
    } else {
      newErrors.lastName = '';
      console.log('Valid: Only letters detected in last name');
    }

    // Validate age
    const age = parseInt(formData.age, 10);
    if (isNaN(age) || age < 0 || age > 10) {
      newErrors.age = 'Age must be a non-negative number and less than 18';
      valid = false;
    } else {
      newErrors.age ='';
    }

    // Update the errors state with the validation results
    setErrors(newErrors);
    return valid;
  }

  // Handle input changes for text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for multi-select immunizations
  const handleImmunizationsChange = (e) => {
    const { options } = e.target;
    const selectedImmunizations = [];
    for (const option of options) {
      if (option.selected) {
        selectedImmunizations.push(option.value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      immunizations: selectedImmunizations,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
      // If valid, update registrations state and reset form data
      setRegistrations((prevRegistrations) => [...prevRegistrations, formData]);
      console.log('Form Data Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        immunizations: [],
      });
    } else {
      // If invalid, display error messages
      console.log('Form contains validation errors. Please correct them.');
      alert('Form has validation errors. Please correct them.');
    }
  };

  // Render the registration form and the ListView component
  return (
    <div className='registration'>
      <form onSubmit={handleSubmit}>
        <h1>REGISTRATION FORM</h1>
        {/* Input for first name */}
        <label htmlFor="firstName">
          FirstName:
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter first name..."
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {/* Display error message for first name */}
          <div className="error-message" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.firstName}</div>
        </label>

        {/* Input for last name */}
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name...."
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {/* Display error message for last name */}
          <div className="error-message" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.lastName}</div>
        </label>

        {/* Input for age */}
        <label>
          Age:
          <input
            type="number"
            name="age"
            required
            placeholder="Enter age...."
            value={formData.age}
            onChange={handleInputChange}
          />
          {/* Display error message for age */}
          <div className="error-message" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.age}</div>
        </label>

        {/* Select input for gender */}
        <label>
          Gender:
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Multi-select input for immunizations */}
        <label>
          Immunizations:
          <select
            name="immunizations"
            required
            multiple
            value={formData.immunizations}
            onChange={handleImmunizationsChange}
          > 
            <option value="BCG">BCG</option>
            <option value="MMR">MMR</option>
            <option value="RV">RV</option>
            <option value="DTaP">DTaP</option>
          </select>
        </label>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Render the ListView component with registrations data */}
      <ListView registrations={registrations} />
    </div>
  );
};

// Export the RegistrationForm component as the default export
export default RegistrationForm;
