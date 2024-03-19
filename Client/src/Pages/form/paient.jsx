import React, { useState } from 'react';
import axios from 'axios';

function PatientForm() {
  const [formData, setFormData] = useState({
    Patient_id: '',
    name: '',
    Address: {
      No: '',
      Lane: '',
      City: '',
      District: '',
      Country: ''
    },
    ContactNumber: '',
    ProfilePicture: '',
    BirthDay: {
      Year: '',
      Month: '',
      Date: '',
      Gender: '',
      Age: ''
    },
    AppoinmentID: '',
    DoctorID: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/Patient/AddNotes', formData)
      .then(response => {
        console.log(response);
        // Clear form data after successful submission
        setFormData({
          Patient_id: '',
          name: '',
          Address: {
            No: '',
            Lane: '',
            City: '',
            District: '',
            Country: ''
          },
          ContactNumber: '',
          ProfilePicture: '',
          BirthDay: {
            Year: '',
            Month: '',
            Date: '',
            Gender: '',
            Age: ''
          },
          AppoinmentID: '',
          DoctorID: ''
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>New Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="number" name="Patient_id" value={formData.Patient_id} onChange={handleChange} />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="Address.No" placeholder="No" value={formData.Address.No} onChange={handleChange} />
        <input type="text" name="Address.Lane" placeholder="Lane" value={formData.Address.Lane} onChange={handleChange} />
        <input type="text" name="Address.City" placeholder="City" value={formData.Address.City} onChange={handleChange} />
        <input type="text" name="Address.District" placeholder="District" value={formData.Address.District} onChange={handleChange} />
        <input type="text" name="Address.Country" placeholder="Country" value={formData.Address.Country} onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="text" name="ContactNumber" value={formData.ContactNumber} onChange={handleChange} />

        <label>Profile Picture:</label>
        <input type="text" name="ProfilePicture" value={formData.ProfilePicture} onChange={handleChange} />

        <label>Birth Day:</label>
        <input type="text" name="BirthDay.Year" placeholder="Year" value={formData.BirthDay.Year} onChange={handleChange} />
        <input type="text" name="BirthDay.Month" placeholder="Month" value={formData.BirthDay.Month} onChange={handleChange} />
        <input type="text" name="BirthDay.Date" placeholder="Date" value={formData.BirthDay.Date} onChange={handleChange} />
        <input type="text" name="BirthDay.Gender" placeholder="Gender" value={formData.BirthDay.Gender} onChange={handleChange} />
        <input type="number" name="BirthDay.Age" placeholder="Age" value={formData.BirthDay.Age} onChange={handleChange} />

        <label>Appointment ID:</label>
        <input type="number" name="AppoinmentID" value={formData.AppoinmentID} onChange={handleChange} />

        <label>Doctor ID:</label>
        <input type="number" name="DoctorID" value={formData.DoctorID} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;
