import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import CreateEvent from './CreateEvent';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const addEvent = (eventData) => {
    setEvents([...events, { ...eventData, trainers: [] }]);
    setShowCreateEvent(false); // Hide the create event form after adding an event
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleShowEvents = () => {
    setShowCreateEvent(false);
    setShowEvents(true);
  };

  const handleCreateEventClick = () => {
    setShowCreateEvent(true);
    setShowEvents(false);
  };

  return (
    <div className="admin-dashboard">
      <header className="header">
        <h1>Admin Dashboard</h1>
        <div className="profile-menu">
          <FontAwesomeIcon icon={faUser} className="profile-icon" onClick={toggleProfile} />
          {showProfile && (
            <div className="profile-options">
              <button onClick={() => alert('Profile details')}>Profile</button>
              <button onClick={() => alert('Logout')}>Logout</button>
            </div>
          )}
        </div>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <button onClick={handleShowEvents} className="sidebar-btn">Events</button>
          <Link to="/assign-events" className="sidebar-btn">Assign Events</Link>
          <Link to="/reports" className="sidebar-btn">Reports</Link>
        </div>
        <div className="content">
          {showCreateEvent ? (
            <CreateEvent addEvent={addEvent} />
          ) : (
            showEvents && (
              <div className="event-section">
                <button onClick={handleCreateEventClick} className="create-event-btn">Create Event</button>
                <div className="event-list">
                  {events.length === 0 ? (
                    <p>No scheduled events</p>
                  ) : (
                    events.map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
