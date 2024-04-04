import React, { useState,useEffect } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from '../List/List.module.css';


export default function List() {
    const[results,setResults]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5038/api/patient/AllFinalResults')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => {
            setResults(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div>
       <div>
      <div className={Style.List}>
        {results.map(appointment => (
          <div className={Style.ListItem} key={appointment._id}>
            <Row>
            <Col sm={7}>
                <p>{appointment.date}<br />{appointment.time}</p>
              </Col>
             
              <Col sm={5}>
                <h6>{appointment.Risk}</h6>
              </Col>
             
            </Row>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
