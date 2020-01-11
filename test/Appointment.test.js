import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Ashley' };
    const container = document.createElement('div');
    ReactDOM.render(
      <Appointment customer={customer} />,
      container
    );
    // yang penting body punya text dengna string yang dibawah tidak peduli berapa level
    expect(container.textContent).toMatch('Ashley');
  });

  it.skip('renders another customer first name', () => {
    const customer = { firstName: 'Ashley' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    expect(document.body.textContent).toMatch('Jordan');
  });
});
