import React, { useEffect, useState } from 'react';
import Style from '../../components/Dashboard/docList.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListComponent = ({ selectedDate }) => {
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
  
  const filterData = selectedDate ? appointments.filter(item => item.appointment_date === selectedDate.format('YYYY-MM-DD')) : appointments;

  return (
    <div>
      <div className={Style.List}>
        {filterData.map(appointment => (
          <div className={Style.ListItem} key={appointment.doctor_name}>
            <Row className={Style.appointment}>
              <Col sm={5}>
                <h6>{appointment.doctor_name}</h6>
              </Col>
              <Col sm={7}>
                <p>{appointment.appointment_date}<br />{appointment.hospital}</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
