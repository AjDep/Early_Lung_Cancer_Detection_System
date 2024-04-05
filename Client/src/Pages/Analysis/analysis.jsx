import React, { useState, useEffect } from 'react';
import Header from './../../components/header/header';
import Bottem_card from './../../components/Analysis/bottem_card';
import Pie_chart from './../../components/Analysis/pie_chart';
import style from './anlysis.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GirlImage from "./../../assets/Girl.png";
import Details from "./../../components/Analysis/details";
import MyLottieAnimation from '../../components/Animations/animation';


function Analysis(){

  const [phoneNumber, setPhoneNumber] = useState('');
  const [Name, setName] = useState('');
  const [Ecount, setECount] = useState(''); //->number of Patients with similar Alkane levels
  const [Ccount, setCCount] = useState(''); //->Patients that have cancer with the similar ALkane level
  const [NCcount, setNCCount] = useState(''); //->Patients that don't have cancer with the similar Alkane level
  const [Totalcount,setTotalCount] = useState(''); //->Total number of Patients with similar Alkane levels
  const [lastResult, setLastResult] = useState(''); // State variable to store the last result
  const [recommendation, setRecommendation] = useState(""); 
  const [AlkaneRange, setAlkaneRange] = useState(""); 




   // Empty dependency array for one-time effect

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/Customer/Count');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setTotalCount(count); // Set the count in state
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
   //Total number of Patients with similar Alkane levels
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/Customer/Count2');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setECount(count); // Set the count in state
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
  //Total number of Patients that have cancer with the similar ALkane level
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/Customer/Count3');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setCCount(count); // Set the count in state
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
  ////Total number of Patients that don't have cancer with the similar Alkane level
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/Customer/Count4');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setNCCount(count); // Set the count in state
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/customer/lastResult');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data.Risk);
        console.log("2nd :",data.Risk)
        if (data && data.Risk && data.AlkaneRange) {

          setLastResult(data.Risk); // Set the fetched result in state
          console.log("2nd :",data.Risk)
          setAlkaneRange(data.AlkaneRange);

        } else {
          throw new Error('Result not found in the fetched data');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };
  
    fetchData(); // Call fetchData when the component mounts
  
    // Add dependencies if necessary
  }, []); // Empty dependency array for one-time effect
  // Determine recommendation based on lastResult
  useEffect(() => {
    if (lastResult === "You are lung CANCER FREE !!!") {
      setRecommendation("You are okay");
    }
    else if (lastResult==="You are at LOW RISK !!!"){
      setRecommendation("You are okay but consult a doctor");
    }
    else if (lastResult==="You are at MODERATE RISK !!!"){
      setRecommendation("We recommend you to consult a doctor");
    }
    else if (lastResult==="You are at HIGH RISK !!!"){
      setRecommendation("consulting a doctor is must!!");
    }
    else {
      setRecommendation("Some recommendation here"); 
    }
  }, [lastResult]); // Run this effect whenever lastResult changes

  const top_cards = [
    { title: "Prediction", value: lastResult },
    { title: "Recommendation", value: recommendation },
  ];

 
  const similarAlkanePercentageOfTotalUsers = ((Ecount / Totalcount) * 100).toFixed(2);
  const similarAlkanePercentageOfTotalUsersWithCancer = ((Ccount / Totalcount) * 100).toFixed(2);
  

  const cards = [
    {Details: "Number of people with the same result.", value:Ecount},
    {Details: "Number of High risk individuals  with identical alkane levels.", value: Ccount},
    {Details: "Number of Lower risk  individuals with equivalent alkane levels.", value: NCcount},
    {Details: "Similar alkane levels as a percentage of total users.", value:similarAlkanePercentageOfTotalUsers+"%" },
    {Details: "Cancer-diagnosed individuals as a percentage.", value: similarAlkanePercentageOfTotalUsersWithCancer +"%"},
  ];

  return (
    <div>
      <Header name="Analysis" />

      <div className='content'>
        <div className={style.ContentofAN}>
        <div>
          <div className={style.Top}>
            <Col>
              <div className={style.top_container}>
                <Pie_chart Alvalue={AlkaneRange}/>
              </div>
            </Col>
            
              <div className={style.detail}>
                {top_cards.map((item, i) => (
                  <Details key={i} title={item.title} value={item.value} />
                ))}
              </div>
            
          </div>

            <div>
              <div className={style.bottem}>
                {cards.map((card, i) => (
                  <Bottem_card
                    key={i}
                    Details={card.Details}
                    value={card.value}
                  />
                ))}
              </div>
            </div>
        </div>

        <Col>
        <MyLottieAnimation/>
       
        </Col>
      </div>
      </div>
    </div>
  );
}

export default Analysis;
