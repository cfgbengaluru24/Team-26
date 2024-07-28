import styles from './ProfileDetails.module.css';
import { CircularProgress, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ProfileDetails = (props) => {
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTravelRequest = async (trainerId, eventId) => {
    try {
      const response = await axios.post('http://localhost:5000/request/approve', {
        trainerId,
        eventId
      });
    } catch (error) {
      console.log(error.data)
    }
  };

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      const userId = window.localStorage.getItem('user');
      // const userId = "66a514570e88732e10029422";

      if (!userId) {
        setError('User ID not found in local storage');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/trainer/${userId}`);
        setTrainer(response.data);
      } catch (error) {
        setError('Failed to fetch trainer details');
      } finally {
        setLoading(false);
      }
    };

    fetchTrainerDetails();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Snackbar open message={error} />;
  }

  if (!trainer) {
    return <div>No trainer details available</div>;
  }

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
              <li key={event._id}>
                {event.name}
                <button onClick={() => handleTravelRequest(trainer._id, event._id)}>Travel Request</button>
              </li>
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
