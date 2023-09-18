import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function EventCalendar({ allEvents, initialEvent }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState(initialEvent);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDayClick = (date) => {
    setSelectedDay(date);
    setSelectedEvent(null);
    setIsEditMode(false);
    setNewEvent(initialEvent);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setIsEditMode(true);
  };

  const filteredEvents = allEvents.filter(
    (event) =>
      event.start.getDate() === selectedDay?.getDate() &&
      event.start.getMonth() === selectedDay?.getMonth() &&
      event.start.getFullYear() === selectedDay?.getFullYear()
  );

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleDayClick}
        onSelectEvent={handleEventSelect}
      />
      {selectedDay && (
        <div>
          <h3>Events on {selectedDay.toDateString()}</h3>
          <ul>
            {filteredEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong> - {event.description}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedEvent && (
        <div className="mt-5">
          <h3>Selected Event</h3>
          <hr />
          <p className="mt-5">
            <strong>Title:</strong>
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              {selectedEvent.title}
            </h2>
          </p>
          <p>
            <strong>Description:</strong>
            <p className="leading-relaxed">{selectedEvent.description}</p>
          </p>

          <p className="mt-3 text-gray-500 text-sm">
            <strong>Start Date:</strong>{' '}
            {selectedEvent.start.toLocaleDateString()} {selectedEvent.startTime}
            to
            <strong>
              End Date:
            </strong> {selectedEvent.end.toLocaleDateString()}{' '}
            {selectedEvent.endTime}
          </p>
          <p className=" mt-5">
            <strong>Event Duration:</strong>{' '}
            <h3 className="text-gray-500 mb-3">
              {selectedEvent.durationHours} hours
            </h3>
          </p>
        </div>
      )}
    </div>
  );
}
