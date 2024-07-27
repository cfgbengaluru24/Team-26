import React, { useState } from 'react';
import EventList from './EventList';
import styles from './Events.module.css'
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

    const handleClick = (event) => {
        setSelectedJob(event);
    };

    return (
        <div className={styles.event}>
            <EventList 
                eventItems={eventItems} 
                onClick={handleClick} 
                selectedJob={selectedJob} 
            />
            <JobDescSidePanel selectedJob={selectedJob} />
        </div>
    );
};

export default Events;
