import React, { useState } from 'react';
import '../Styles/EventForm.css';

const EventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setFormData({
      name: '',
      date: '',
      location: ''
      
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Event Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        value={formData.location}
        onChange={handleChange}
        required
      />

    

      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
