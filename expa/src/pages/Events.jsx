import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from './EventList';
import styles from './Events.module.css';
import JobDescSidePanel from './JobDescSidePanel';

const Events = () => {
    const eventItems = [
        { eventName: "BootCamp 1", eventDate: "12/3/25", location: "abc" },
        { eventName: "BootCamp 2", eventDate: "12/6/25", location: "abc" },
        { eventName: "BootCamp 3", eventDate: "22/7/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
        { eventName: "BootCamp 4", eventDate: "22/10/25", location: "abc" },
    ];

    const [selectedJob, setSelectedJob] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setSelectedJob(event);
    };

    const handleProfileClick = () => {
        navigate('/profile-details'); // Adjust the path according to your route configuration
    };

    return (
        <>
            <div className={styles.header}>
                <button className={styles.profileButton} onClick={handleProfileClick}>Profile</button>
            </div>
            <div className={styles.event}>
                <EventList 
                    eventItems={eventItems} 
                    onClick={handleClick} 
                    selectedJob={selectedJob} 
                />
                <JobDescSidePanel selectedJob={selectedJob} />
            </div>
        </>
    );
};

export default Events;
