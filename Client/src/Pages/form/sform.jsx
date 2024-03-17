import React, { Component } from 'react';

class SForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      patient_id: "",
      name: "",
      address_no: "",
      lane: "",
      city: "",
      district: "",
      country: "",
      contact_number: "",
      profile_picture: "",
      birth_year: "",
      birth_month: "",
      birth_date: "",
      gender: "Male",
      age: "",
      appointment_id: "",
      doctor_id: ""
    };
  }

  API_URL = "http://localhost:5038/";

  componentDidMount() {
    this.refreshNotes();
  }

  async refreshNotes() {
    fetch(this.API_URL + "api/Customers/GetNotes")
      .then(response => response.json())
      .then(data => {
        this.setState({ notes: data });
      });
  }

  async addClick(event) {
    event.preventDefault(); // Prevent default form submission
    const {
      patient_id,name,
      address_no,
      lane,
      city,
      district,
      country,
      contact_number,
      profile_picture,
      birth_year,
      birth_month,
      birth_date,
      gender,
      age,
      appointment_id,
      doctor_id
    } = this.state;

    const data = {
      patient_id,
      name,
      address: {
        no: address_no,
        lane,
        city,
        district,
        country
      },
      contact_number,
      profile_picture,
      birthday: {
        year: birth_year,
        month: birth_month,
        date: birth_date
      },
      gender,
      age,
      appointment_id,
      doctor_id
    };

    fetch(this.API_URL +"api/Customer/AddNotes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        alert(result);
        this.refreshNotes();
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>The app</h1>
        <form onSubmit={(event) => this.addClick(event)}>
          <label htmlFor="patient_id">Patient ID:</label><br />
          <input type="number" id="patient_id" name="patient_id" value={this.state.patient_id} onChange={(event) => this.handleChange(event)} required /><br /><br />

          {/* Add other input fields here, similar to the above example */}

          <input type="submit" value="Submit" />
        </form>
      
      </div>
    );
  }
}

export default SForm;
