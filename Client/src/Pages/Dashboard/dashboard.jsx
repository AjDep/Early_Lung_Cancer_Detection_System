import Navbar from "../../components/Navbar/navbar";
import style from "./dashboard.module.css";
import Header from "./../../components/header/header";
import Card from "../../components/Dashboard/card";
import Card2 from "../../components/Dashboard/card2";
import Card3 from "../../components/Dashboard/card3";
import Calendar from "../../components/Calendar/Calendar";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import PieChart from "../../components/PieChart/PieChart";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import BasicSelect from "../../components/BasicSelect/BasicSelect";
import ScrollableBox from "../../components/ScrollableBox/ScrollableBox";
import React, { useState, useEffect } from "react";
import List from "../../components/Dashboard/docList";
import Button from "react-bootstrap/Button";
import Health from "./../Health/health";

function Dashboard() {
  const [data, setData] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5038/api/customer/getnotes/Name"
        );
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
          );
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className={style.contaner}>
      <Navbar />
      <div>
        <Header name="Dashboard" />
        <div className={style.content}>
          <div className={style.container4}>
            <div className={style.leftsidePanel}>
              <div className={style.container2}>
                <div>
                  {/* Use optional chaining to safely access FirstName */}
                  {data?.name?.FirstName && (
                    <Card2
                      Details={"Hi! " + data.name.FirstName}
                      value="Have you had a routine health check this month ?"
                    />
                  )}
                </div>
               
              </div>

              {/* <Card Details="Hi Josepine ! Check your health"/> */}
              <div className={style.bottem_left}>
               
                <Button className={style.button12} variant="light" size="lg">
                  <h5>
                    <HistoryOutlinedIcon /> History Analysis
                  </h5>
                </Button>{" "}
                <Button className={style.button12} variant="light" size="lg">
                  <h5>
                    <MedicalServicesOutlinedIcon /> Early Diagnosis
                  </h5>
                </Button>{" "}

              </div>
              <div className={style.container3}>
                <div>
                  <p>View Your Test History</p>
                </div>
                
              </div>

              <div>
                <ColumnChart />
              </div>
            </div>

            {/* The Right hand side plane with doc oppoinments and date */}
            <div className={style.RightsidePanel}>
            <div className="calendar-card">
            <h5>Upcoming Test and Appointments</h5>
             <Calendar onDateChange={handleDateChange} onSelect={(date, { source }) => {if (source === 'date') {console.log('Panel Select:', source);}}}/>
            </div>
            <div className={style.appointments}>
              <List selectedDate={selectedDate} />
              </div>
            </div>

          


          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
