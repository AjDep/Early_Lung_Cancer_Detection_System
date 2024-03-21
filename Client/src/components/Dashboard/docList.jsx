import React, { useEffect, useState } from 'react';
import Style from '../../components/Dashboard/docList.module.css';

const ListComponent = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5038/api/customer/Appointment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul className={Style.List}>
        {appointments.map(appointment => (
          <li className={Style.ListItem} key={appointment.doctor_name}>
            <h4>{appointment.doctor_name}</h4>
            <p>{appointment.appointment_date}<br></br>
            {appointment.hospital}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
