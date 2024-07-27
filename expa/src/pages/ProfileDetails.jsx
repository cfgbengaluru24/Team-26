import styles from './ProfileDetails.module.css';
import { CircularProgress, LinearProgress, Snackbar } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Feed } from '@mui/icons-material';

export const ProfileDetails = (props) => {

  const trainer = 
    {
      _id: "63f5d5d2f26a4d7b5c9e7d6b",
      name: "Shra",
      email: "shra@example.com",
      dob: "1933-11-22T00:00:00.000Z",
      location: "New York",
      languagesKnown: ["English", "Spanish"],
      upcomingEvents: [
        { _id: "64d5f0e4e4f01b5c9d19f9e1", name: "BootCamp 1" },
        { _id: "64d5f0e4e4f01b5c9d19f9e2", name: "BootCamp 2" }
      ],
      completedEvents: [
        { _id: "64d5f0e4e4f01b5c9d19f9e3", name: "BootCamp 3" }
      ],
      Assigned: true,
      Experience: 5
    };

  return (
    <div className={styles.box}>
      <center><h1><b>Profile Details</b></h1></center>
      <div className={styles.applicationDetails}>
        <hr />
        <h2>Personal Information</h2>
        <div>
          <div className={styles.titles}>Name</div>
          <div>{trainer.name}</div>
        </div>
        <div>
          <div className={styles.titles}>Email</div>
          <div>{trainer.email}</div>
        </div>
        <div>
          <div className={styles.titles}>Location</div>
          <div>{trainer.location}</div>
        </div>
        <div>
          <div className={styles.titles}>Date of Birth</div>
          <div>{new Date(trainer.dob).toLocaleDateString()}</div>
        </div>
        <div>
          <div className={styles.titles}>Languages Known</div>
          <div>{trainer.languagesKnown.join(', ')}</div>
        </div>
        <div>
          <div className={styles.titles}>Upcoming Events</div>
          <ul>
            {trainer.upcomingEvents.map((event) => (
              <li key={event._id}>{event.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.titles}>Completed Events</div>
          <ul>
            {trainer.completedEvents.map((event) => (
              <li key={event._id}>{event.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.titles}>Experience</div>
          <div>{trainer.Experience} years</div>
        </div>
        <div>
          <div className={styles.titles}>Assigned</div>
          <div>{trainer.Assigned ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  );
};
