import Header from "../../components/header/header";
import * as React from "react";
import List from "../../components/List/List"
import s from "../History/history.module.css"
import { Statistic } from 'antd';
import CountUp from 'react-countup';
import { useState,useEffect } from "react";


const formatter = (value) => <CountUp end={value} separator="," />;

function History() {
  const[TotalTest,setTotaltest]=useState(null);
  const[PostiveTest,setPositiveTest]=useState(null);
  const[NegativeTest,setNegativeTest]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/patient/AllFinalResults/count');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setTotaltest(count); // Set the count in state
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
        const response = await fetch('http://localhost:5038/api/patient/AllFinalResults/count/positive');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setPositiveTest(count); // Set the count in state
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
        const response = await fetch('http://localhost:5038/api/patient/AllFinalResults/count/negative');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { count } = await response.json();
        setNegativeTest(count); // Set the count in state
      } catch (error) {
        console.error('Error:', error);
        // Handle errors, show error messages, etc.
      }
    };
    fetchData(); // Call fetchData when component mounts
  }, []);
  return (
    <div>
      <Header name="History" />
      <div className="content">
      <div className={s.content2}>

      <div className={s.LeftSide}>
        <h1>All Test History</h1>
        <List/>
      </div>

      <div className={s.RightSide}>
      
        <div className={s.AlkaneCard}>
        <Statistic
          title="Number of Total Tests"
          value={TotalTest}
          formatter={formatter}
          className='AlknaeCardDeatils' 
        />
       </div>
       <div className={s.AlkaneCard}>
        <Statistic
          title="Number of total tests that are positive"
          value={PostiveTest}
          formatter={formatter}
          className='AlknaeCardDeatils' 
        />
       </div>
       <div className={s.AlkaneCard}>
        <Statistic
          title="Number of total tests that are negative"
          value={NegativeTest}
          formatter={formatter}
          className='AlknaeCardDeatils' 
        />
       </div>

      </div>

      </div>

    </div>
    </div>
  );
}

export default History;
