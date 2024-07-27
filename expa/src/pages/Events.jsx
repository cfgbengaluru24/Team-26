import React from 'react'
import EventList from './EventList'

const Events = () => {

    const eventItems = [{
        eventName : ["BootCamp 1"],
        eventDate : ["12/3/25"],
        location:["abc"],},
        {
          eventName : ["BootCamp 2"],
          eventDate : ["12/6/25"],
          location:["abc"],},
          {
            eventName : ["BootCamp 3"],
            eventDate : ["22/7/25"],
            location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
            {
              eventName : ["BootCamp 4"],
              eventDate : ["22/10/25"],
              location:["abc"],},
          ]
          

  return (
    <div>
      <EventList eventItems = {eventItems}/>
    </div>
  )
}

export default Events
