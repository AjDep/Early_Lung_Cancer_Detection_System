import React from "react";
import Navbar from "./../../components/Navbar/navbar";
import style from "./health.module.css";
import Girl from "./../../assets/Girl.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/header/header";
import HealthForm from "../../Pages/form/sform";
import { useState, useEffect } from "react";
function Health() {
  const [startTest, setStartTest] = useState(false);
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(10); // 10 seconds countdown
  const [isRequesting, setIsRequesting] = useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);

  useEffect(() => {
    let timer;

    if (startTest) {
      // setMessage('Test will start in ');
      setCountdown(10); // Reset countdown to 10 seconds

      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            handleTestStart();
            clearInterval(timer); // Stop the countdown
            return 0;
          }
        });
      }, 1000); // Update countdown every second
    }

    // Cleanup function to clear the timer if the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [startTest]);

  const handleButtonClick = () => {
    setStartTest(true);
    setIsRequesting(true);
  };

  const handleTestStart = () => {
    // Logic for starting the test
    setMessage('Test has started!');
    console.log('Test has started');
    setStartTest(false); // Reset startTest to false
    setIsTestStarted(true);
    // Here you would add your API request logic or any other action

    fetch('http://localhost:5038/hardware', {
      method: 'GET', // or 'GET' depending on your API
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
      // body: JSON.stringify({
      //   // Your request body content here

      // }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data.message);
        setMessage(data.message);
        setIsRequesting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('An error occurred while starting the test.');
        setIsRequesting(false);
      });

    setMessage('Test is starting...');
    setStartTest(false); // Reset the startTest flag if needed
  };


  return (
    <div className={style.container}>
      <Navbar />
      <div>
        <Header name="Health" />
        <div className={style.content}>
          <div className={style.firstColumn}>
            <h5>Click me before breath into device</h5>
              <div className={style.BreathIn}>
                <button id={style.BreathIn1}
                  onClick={handleButtonClick}
                  disabled={isRequesting}
                  className={`submitBtn ${isRequesting ? 'pressed' : ''}`}>
                  Start Test
                </button>
              </div>
              <div style={{ marginLeft: "4%", marginTop: "6%" }}>
                {startTest && <p>{message} {countdown} seconds ...</p>}
                <p>{message}</p>
              </div>
          </div>
            {/* <h2>Update your details here...</h2>
            <form>
              <div className={style.measurementInputsOne}>
                <input
                  type="text"
                  placeholder="Enter/Update your Weight"
                  name="weight"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter/Update your Height"
                  name="height"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter/Update your Co2 Concentration"
                  name="Co2"
                  required
                />
              </div>
              <div className={style.measurementInputsTwo}>
                <select name="bloodType" required>
                  <option value="">Select Your Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                
                </select>
                <select name="smokingStatus" required>
                  <option value="">Select Your Smoking Status</option>
                  <option value="smoker">Smoker</option>
                  <option value="non-smoker">Non-Smoker</option>
                  <option value="ex-smoker">Ex-Smoker</option>
                 
                </select>
              </div> 
              <div className={style.submit}>
                <button type="submit" className={style.submitBtn}>Submit</button>
              </div>
  </form>*/}
            
          
          <div className={style.secondColumn}>
            <div className={style.contaner2}  >
              
            </div>

            <HealthForm isTestStarted={isTestStarted} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
