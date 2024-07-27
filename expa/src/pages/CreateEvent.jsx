import React, { useState } from 'react';
import './CreateEvent.css';

const CreateEvent = ({ addEvent }) => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(eventData);
    setEventData({
      name: '',
      date: '',
      location: '',
    });
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit} className="create-event-form">
        <label htmlFor="name">Event Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={eventData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={eventData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
