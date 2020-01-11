import React from 'react';

export const Appointment = ({ customer: { firstName } }) => {
  return <div>{firstName}</div>;
};

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <div key={appointment.startsAt} />
      ))}
    </ol>
  </div>
);
