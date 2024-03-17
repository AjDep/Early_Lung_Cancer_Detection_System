import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './../../components/header/header';
import Bottem_card from './../../components/Analysis/bottem_card';
import Pie_chart from './../../components/Analysis/pie_chart';
import Navbar from './../../components/Navbar/navbar';
import style from './anlysis.module.css';
import lung from './../../assets/Lung 2.png';

function Analysis(){
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes data from backend when the component mounts
    axios.get('http://localhost:5038/api/Customers/GetNotes')
      .then(response => {
        // Set the retrieved notes data in the state
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, when the component mounts
  const cards =[
   {Details:"Number of people with the same result.", value:"2563"},
   {Details:"Number of cancer patients with identical alkane levels." , value:"1538"},
   {Details:"Non-cancer individuals with equivalent alkane levels.", value:"1025"},
   {Details:"Similar alkane levels as a percentage of total users.", value:"25.3%"},
   {Details:"Cancer-diagnosed individuals as a percentage.", value:"60.0%"},
  ]

    return(
   
    <div>
      <Header name="Analysis"/>
      <div className="content">

        <div className={style.top_container}>
          <Pie_chart/>
          <img src={lung} alt=""  className={style.lung}/>
        </div>
      
       
        <div className={style.bottem_container}>
          <div className={style.bottem_left}>
            {
              notes.map((note) =>{
                  return(
                    <Bottem_card  Details={note.name} value={note.ContactNumber} />
                  );
                }
              ) 
            }
  
          </div>
          <div className={style.bottem_right}>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Analysis;