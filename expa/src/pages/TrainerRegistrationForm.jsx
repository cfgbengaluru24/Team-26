import React, { useState } from 'react';
import './TrainerRegistrationForm.css'; // Import the CSS file

const TrainerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    
    location: '',
    language: '',
    nccStatus: '',
    nccDirectorate: '',
    nccYear: '',
    nccCertificate: null,
    nccDeclaration: false
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Trainer Registration</h2>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />

        

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
        />
         <label htmlFor="languages">Languages Known</label>
        <input
          id="languages"
          name="languages"
          type="text"
          value={formData.languages}
          onChange={handleChange}
        />
       
        <label>Are you currently in NCC or were you in NCC?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="nccStatus"
              value="Current NCC Member"
              checked={formData.nccStatus === 'Current NCC Member'}
              onChange={handleChange}
            />
            Current NCC Member
          </label>
          <label>
            <input
              type="radio"
              name="nccStatus"
              value="Ex-NCC Member"
              checked={formData.nccStatus === 'Ex-NCC Member'}
              onChange={handleChange}
            />
            Ex-NCC Member
          </label>
          <label>
            <input
              type="radio"
              name="nccStatus"
              value="No"
              checked={formData.nccStatus === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        {(formData.nccStatus === 'Current NCC Member' || formData.nccStatus === 'Ex-NCC Member') && (
          <>
            <label htmlFor="nccDirectorate">NCC Directorate</label>
            <input
              id="nccDirectorate"
              name="nccDirectorate"
              type="text"
              value={formData.nccDirectorate}
              onChange={handleChange}
            />

            <label htmlFor="nccYear">NCC Year</label>
            <input
              id="nccYear"
              name="nccYear"
              type="text"
              value={formData.nccYear}
              onChange={handleChange}
            />

            <label htmlFor="nccCertificate">Upload NCC Certificate (optional)</label>
            <input
              id="nccCertificate"
              name="nccCertificate"
              type="file"
              onChange={handleChange}
            />
          </>
        )}

{formData.nccStatus === 'No' && (
          <p className="error-message">You are not eligible to become a trainer.</p>
        )}

        <div className="declaration-group">
          <input
            id="nccDeclaration"
            name="nccDeclaration"
            type="checkbox"
            checked={formData.nccDeclaration}
            onChange={handleChange}
          />
          <label htmlFor="nccDeclaration">
            I declare that the above information is accurate and I consent to verification with the NCC unit.
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TrainerRegistrationForm;
