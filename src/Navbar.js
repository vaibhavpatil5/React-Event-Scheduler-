import React, { useState } from 'react';
import EventCalendar from './EventCalendar';

const Navbar = ({ allEvents, setAllEvents }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="normal-case text-xl">Event Scheduler</a>
        </div>
        <div className="navbar-end">
          <a
            className="btn"
            onClick={() => document.getElementById('my_modal_4').showModal()}
          >
            View Calender
          </a>
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Calendar View!</h3>
            <EventCalendar allEvents={allEvents} setAllEvents={setAllEvents} />
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Navbar;
