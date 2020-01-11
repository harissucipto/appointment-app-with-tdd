import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Ashley' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    // yang penting body punya text dengna string yang dibawah tidak peduli berapa level
    expect(document.body.textContent).toMatch('Ashley');
  });
});
