import React from 'react';

export const Appointment = ({ customer: { firstName } }) => {
  return <div>{firstName}</div>;
};

export const AppointmentsDayView = () => (
  <div id="appointmentsDayView"></div>
);
