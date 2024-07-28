import moment from 'moment';

const calculateTotalTravelTime = (bookings) => {
  let totalMinutes = 0;

  const convertToMinutes = (duration) => {
    const parts = duration.split(' ');
    let minutes = 0;

    parts.forEach((part) => {
      if (part.endsWith('h')) {
        minutes += parseInt(part) * 60;
      } else if (part.endsWith('m')) {
        minutes += parseInt(part);
      }
    });

    return minutes;
  };

  let firstDepartureTime = null;

  const getEarliestDepartureTime = (departureTime) => {
    const time = moment(departureTime);
    if (!firstDepartureTime || time.isBefore(firstDepartureTime)) {
      firstDepartureTime = time;
    }
  };

  if (bookings.flights) {
    bookings.flights.forEach((flight) => {
      totalMinutes += convertToMinutes(flight.duration);
      getEarliestDepartureTime(flight.departureTime);
    });
  }

  if (bookings.railways) {
    bookings.railways.forEach((railway) => {
      totalMinutes += convertToMinutes(railway.duration);
      getEarliestDepartureTime(railway.departureTime);
    });
  }

  if (bookings.buses) {
    bookings.buses.forEach((bus) => {
      totalMinutes += convertToMinutes(bus.duration);
      getEarliestDepartureTime(bus.departureTime);
    });
  }

  const addBufferTime = (minutes) => minutes + 2 * 60; // 2 hours buffer time
  totalMinutes += addBufferTime;
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const totalTravelDuration = `${totalHours}h ${remainingMinutes}m`;

  const finalArrivalTime = firstDepartureTime.add(totalMinutes, 'minutes').format();
  return { totalTravelDuration, finalArrivalTime };
};

export default calculateTotalTravelTime;
