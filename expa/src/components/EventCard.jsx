import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event, updateTrainers }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [trainers, setTrainers] = useState([]);

  const handleApprove = (trainerId) => {
    // Logic to approve a trainer
    console.log(`Approved trainer ${trainerId}`);
  };

  const handleReject = (trainerId) => {
    // Logic to reject a trainer
    console.log(`Rejected trainer ${trainerId}`);
  };

  return (
    <div className="event-card">
      <div className="event-header" onClick={() => setShowDetails(!showDetails)}>
        <h3>{event.name}</h3>
      </div>
      {showDetails && (
        <div className="event-details">
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          {trainers.length > 0 && (
            <div className="trainers-list">
              <h4>Trainers:</h4>
              <ul>
                {trainers.map((trainer) => (
                  <li key={trainer.id}>
                    {trainer.name}
                    <button onClick={() => handleApprove(trainer.id)}>Approve</button>
                    <button onClick={() => handleReject(trainer.id)}>Reject</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;
