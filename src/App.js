import React, { useState } from 'react';
import './style.css';
import EventForm from './EventForm';

import Navbar from './Navbar';

export default function App() {
  const [allEvents, setAllEvents] = useState([]);

  return (
    <div>
      <Navbar  allEvents={allEvents} setAllEvents={setAllEvents}/>
      <EventForm allEvents={allEvents} setAllEvents={setAllEvents} />
    </div>
  );
}
