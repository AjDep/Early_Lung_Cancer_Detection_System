// import Header from './../../components/header/header';
// import Navbar from './../../components/Navbar/navbar';
// import style from './profile.module.css';
// import Background from './../../assets/Background.png';
// import Profile_img from './../../assets/Profile img.svg';
// // import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
// import { useState, useEffect } from "react";
// // import VisibilityIcon from '@material-ui/icons/Visibility';
// // import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// // import InputAdornment from '@material-ui/core/InputAdornment';
// import React from 'react';
// import Popup from './popup.jsx';


// function Profile() {
//       const [showPopup, setShowPopup] = useState(false);
//       const [formFields, setFormFields] = useState(generalInfoFields);

//       function updateFieldValues(fields, data) {
//             fields.forEach(field => {
//                   // Assume the data object has keys matching the field names
//                   if (data[field.name] !== undefined) {
//                         field.value = data[field.name];
//                   }
//             });
//       }

//       const generalInfoFields = [
//             { name: 'name', label: 'Name', type: 'text', value: 'John Doe' },
//             { name: 'address', label: 'Address', type: 'text', value: '123 Main St' },
//             { name: 'dob', label: 'Date of Birth', type: 'date', value: '1990-01-01' },
//             { name: 'age', label: 'Age', type: 'number', value: 30 },
//             { name: 'gender', label: 'Gender', type: 'text', value: 'Male' },
//       ];

//       const accountSettingsFields = [
//             { name: 'email', label: 'Email', type: 'email', value: 'example@example.com' },
//             { name: 'password', label: 'Password', type: 'password', value: '' },
//             { name: 'confirmPassword', label: 'Confirm Password', type: 'password', value: '' },
//       ];



//       useEffect(() => {
//             // Simulate fetching data from an API
//             const fetchData = async () => {
//                   const generalInfoResponse = await fetch('http://localhost/5038/fetch-generalInfo'); // Replace with your actual API endpoint
//                   const generalInfoData = await generalInfoResponse.json();

//                   const accountSettingsResponse = await fetch('http://localhost/5038/fetch-accountSettings'); // Replace with your actual API endpoint
//                   const accountSettingsData = await accountSettingsResponse.json();

//                   // Assuming the API returns data in the same format required by the form fields
//                   setFormFields({
//                         generalInfoFields: generalInfoData,
//                         accountSettingsFields: accountSettingsData
//                   });
//             };

//             fetchData();
//       }, []);

//       const handleEditGeneralInfo = () => {
//             setFormFields(generalInfoFields);
//             setShowPopup(true);
//       };

//       const handleEditAccountSettings = () => {
//             setFormFields(accountSettingsFields);
//             setShowPopup(true);
//       };

//       const saveData = () => {
//             console.log('Data saved');
//             // Here you would handle form submission
//             setShowPopup(false);
//       };

//       const cancel = () => {
//             console.log('Cancelled');
//             setShowPopup(false);
//       };


// return (
//       <div className={style.contaner}>
//             <Navbar />
//             <div>
//                   <Header name="Profile" />
//                   <div className={style.content}>
//                         <div className={style.image}>
//                               <img src={Background} alt="Background" className={style.image} />
//                         </div>
//                         <div className={style.Profile_img}>
//                               <img src={Profile_img} alt="Profile_img" className={style.Profile_img} />
//                         </div>
//                         <div className={style.profileHead}>
//                               <h4>Josephine Lang</h4>
//                               {/* <h5>Student</h5> */}
//                         </div>
//                         <div className={style.submitContainer}>
//                               <div className={style.submit}>Edit</div>
//                         </div>

//                         <div className={style.boxcontainer}>
//                               <div className={style.box1}>
//                                     <h2>General Information</h2>
//                                     <p>NIC            : 200256803710</p>
//                                     <p>Address        : Ramukkana,Bandaragama</p>
//                                     <p>Postal Code    : 12560</p>
//                                     <p>Date of Birth  : 12 Nov 2002</p>
//                                     <p>Age            : 21</p>
//                                     <p>Gender         : Female</p>
//                               </div>

//                               <div className={style.box1}>
//                                     <h2>Contact Details</h2>
//                                     <div className={style.box2}>
//                                           <p>+94 714460045</p>
//                                     </div>
//                                     <div className={style.box2}>
//                                           <p>w.hopefinder@gmail.com</p>
//                                     </div>
//                               </div>
//                         </div>
//                         <div className="editbtn">
//                               <button onClick={handleEditGeneralInfo}>Edit General Info</button>
//                               <button onClick={handleEditAccountSettings}>Edit Account Settings</button>

//                               {showPopup && <Popup fields={formFields} onSave={saveData} onCancel={cancel} />}
//                         </div>
//                   </div>

//             </div>
//       </div>
// );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import Popup from './popup.jsx';
import style from './profile.module.css';
import Header from './../../components/header/header';
import Navbar from './../../components/Navbar/navbar';
import Background from './../../assets/Background.png';
import Profile_img from './../../assets/Profile img.svg';
// import { Paper, Button, Tooltip, IconButton, Modal, Backdrop, Fade, TextField } from "@material-ui/core";
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';


function Profile() {
      const [showPopup, setShowPopup] = useState(false);
      const [generalInfoFields, setGeneralInfoFields] = useState([
            { name: 'name', label: 'Name', type: 'text', value: '' },
            { name: 'address', label: 'Address', type: 'text', value: '' },
            { name: 'dob', label: 'Date of Birth', type: 'date', value: '' },
            { name: 'age', label: 'Age', type: 'number', value: '' },
            { name: 'gender', label: 'Gender', type: 'text', value: '' },
      ]);
      const [accountSettingsFields, setAccountSettingsFields] = useState([
            { name: 'email', label: 'Email', type: 'email', value: '' },
            { name: 'password', label: 'Password', type: 'password', value: '' },
            { name: 'confirmPassword', label: 'Confirm Password', type: 'password', value: '' },
      ]);

      useEffect(() => {
            // Simulate fetching data from an API
            const fetchData = async () => {
                  try {
                        const generalInfoResponse = await fetch('http://localhost/5038/fetch-generalInfo');
                        const generalInfoData = await generalInfoResponse.json();
                        setGeneralInfoFields(fields => fields.map(field => ({
                              ...field,
                              value: generalInfoData[field.name] || field.value // Update the value, fallback to existing value if not found
                        })));

                        const accountSettingsResponse = await fetch('http://localhost/5038/fetch-accountSettings');
                        const accountSettingsData = await accountSettingsResponse.json();
                        setAccountSettingsFields(fields => fields.map(field => ({
                              ...field,
                              value: accountSettingsData[field.name] || field.value // Update the value, fallback to existing value if not found
                        })));
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
            };

            fetchData();
      }, []);

      const handleEditGeneralInfo = () => {
            setShowPopup(true);
            setFormFields(generalInfoFields);
      };

      const handleEditAccountSettings = () => {
            setShowPopup(true);
            setFormFields(accountSettingsFields);
      };

      const saveData = () => {
            console.log('Data saved');
            setShowPopup(false);
      };

      const cancel = () => {
            console.log('Cancelled');
            setShowPopup(false);+
      };

      // Assume formFields is defined to hold the current fields for the popup
      const [formFields, setFormFields] = useState([]);

      return (
            <div className={style.contaner}>
                  <Navbar />
                  <div>
                        <Header name="Settings" />
                        <div className={style.content}>
                              <div className={style.image}>
                                    <img src={Background} alt="Background" className={style.image} />
                              </div>
                              <div className={style.Profile_img}>
                                    <img src={Profile_img} alt="Profile_img" className={style.Profile_img} />
                              </div>
                              <div className={style.profileHead}>
                                    <h4>Josephine Lang</h4>
                                    {/* <h5>Student</h5> */}
                              </div>
                              <div className={style.submitContainer}>
                                    <div className={style.submit}>Edit</div>
                              </div>
      
                              <div className={style.boxcontainer}>
                                    <div className={style.box1}>
                                          <h2>General Information</h2>
                                          <p>NIC            : 200256803710</p>
                                          <p>Address        : Ramukkana,Bandaragama</p>
                                          <p>Postal Code    : 12560</p>
                                          <p>Date of Birth  : 12 Nov 2002</p>
                                          <p>Age            : 21</p>
                                          <p>Gender         : Female</p>
                                    </div>
      
                                    <div className={style.box1}>
                                          <h2>Contact Details</h2>
                                          <div className={style.box2}>
                                                <p>+94 714460045</p>
                                          </div>
                                          <div className={style.box2}>
                                                <p>w.hopefinder@gmail.com</p>
                                          </div>
                                    </div>
                              </div>
                              <div className={style.editbtn}>
                                    <button onClick={handleEditGeneralInfo}>Edit General Info</button>
                                    <button onClick={handleEditAccountSettings}>Edit Account Settings</button>
      
                                    {showPopup && <Popup fields={formFields} onSave={saveData} onCancel={cancel} />}
                              </div>
                        </div>
      
                  </div>
            </div>
      );
};

export default Profile;

{/* <div className="App">
            <button onClick={handleEditGeneralInfo}>Edit General Info</button>
            <button onClick={handleEditAccountSettings}>Edit Account Settings</button>

            {showPopup && <Popup fields={formFields} onSave={saveData} onCancel={cancel} />}
      </div> */}
