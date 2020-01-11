import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;

  const render = component =>
    ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('renders the customer first name', () => {
    // 3 A

    // Arrange (Setup test dependencies)
    customer = { firstName: 'Ashley' };
    // Act: Executes production code under test
    render(<Appointment customer={customer} />);
    // yang penting body punya text dengna string yang dibawah tidak peduli berapa level
    // Assert: Check expectattaions are met
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });
});


describe('AppointmentsDayView', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  })
  const render = component => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointment={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
  })

});