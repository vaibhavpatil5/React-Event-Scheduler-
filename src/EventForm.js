import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialEvent = {
  title: '',
  description: '',
  start: new Date(),
  startTime: '',
  end: new Date(),
  endTime: '',
  durationHours: '',
};

export default function EventForm({ allEvents, setAllEvents }) {
  const [newEvent, setNewEvent] = useState(initialEvent);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent(initialEvent);
  };

  const handleEditEvent = () => {
    if (selectedEvent) {
      const updatedEvents = allEvents.map((event) =>
        event === selectedEvent ? newEvent : event
      );
      setAllEvents(updatedEvents);
      setIsEditMode(false);
      setNewEvent(initialEvent);
    }
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setNewEvent({ ...event });
    setIsEditMode(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = allEvents.filter(
        (event) => event !== selectedEvent
      );
      setAllEvents(updatedEvents);
      setSelectedEvent(null);
    }
  };

  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/date-picker-concept-illustration_114360-4495.jpg?w=740&t=st=1694987477~exp=1694988077~hmac=6606124d2509bcac8dafdda41c2e518953df277611b32757952c53a254dc487a"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Welcome to Event Scheduler
              </h1>
              <p className="mb-8 leading-relaxed">
                Plan and organize your events with ease. Create, manage, and{' '}
                <br /> track your events effortlessly.
              </p>
              <div>
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Add Events
                </h2>
                <hr />
                <div className="relative mb-4 mt-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, description: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-25 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <label
                      htmlFor="start-date"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Event Start Date
                    </label>
                    <br />
                    <DatePicker
                      id="start-date"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholderText="Start Date"
                      selected={newEvent.start}
                      onChange={(start) => setNewEvent({ ...newEvent, start })}
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="start-time"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Event Start Time
                    </label>
                    <input
                      type="time"
                      id="start-time"
                      name="start-time"
                      value={newEvent.startTime}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, startTime: e.target.value })
                      }
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="end-date"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Event End Date
                    </label>
                    <br />
                    <DatePicker
                      id="end-date"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholderText="End Date"
                      selected={newEvent.end}
                      onChange={(end) => setNewEvent({ ...newEvent, end })}
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="end-time"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Event End Time
                    </label>
                    <input
                      type="time"
                      id="end-time"
                      name="end-time"
                      value={newEvent.endTime}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, endTime: e.target.value })
                      }
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="relative mt-4 mb-4">
                  <label
                    htmlFor="duration"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Duration (hours)
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={newEvent.durationHours}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        durationHours: e.target.value,
                      })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                {isEditMode ? (
                  <button
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={handleEditEvent}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={handleAddEvent}
                  >
                    Add Event
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100 ">
              {allEvents.map((event, index) => (
                <div
                  key={index}
                  className="py-8 flex flex-wrap md:flex-nowrap "
                >
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col bg-red">
                    <span className="font-semibold title-font text-gray-700">
                      Date and Time
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {event.start.toLocaleDateString()} {event.startTime}to{' '}
                      <br />
                      {event.end.toLocaleDateString()} {event.endTime}
                    </span>
                  </div>
                  <div className="md:flex-grow ml-5 border-left-1">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {event.title}
                    </h2>
                    <p className="leading-relaxed">{event.description}</p>
                    <h3 className="text-gray-500 mb-3 mt-3">
                      {' '}
                      {event.durationHours} hours
                    </h3>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          onClick={() => handleEventSelect(event)}
                          className="w-[25px] h-[25px] text-gray-800 dark:text-white cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.1"
                            d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
                          />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          onClick={handleDeleteEvent}
                          className="w-[25px] h-[25px] text-gray-800 dark:text-white cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.1"
                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
