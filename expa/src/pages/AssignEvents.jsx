import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import EventCard from '../components/EventCard';
import './AssignEvents.css';

const AssignEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events?date=${selectedDate.toISOString().split('T')[0]}`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [selectedDate]);

  return (
    <div className="assign-events">
      <h1>Assign Events</h1>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      <div className="event-list">
        {events.length === 0 ? (
          <p>No events scheduled for this date</p>
        ) : (
          events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default AssignEvents;
