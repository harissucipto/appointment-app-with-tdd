import React from 'react';

export const CustomerForm = ({ firstName, lastName }) => (
  <form id="customer">
    <label htmlFor="firstName">First name</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      value={firstName}
      readOnly
    />
  </form>
);
