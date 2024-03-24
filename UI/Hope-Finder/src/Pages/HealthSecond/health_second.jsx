import React from "react";
import Header from "./../../components/Header/header";
import Navbar from "./../../components/Navbar/navbar";
import style from "./health_second.module.css";
import Girl from "./../../assets/Girl.png";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

function Health() {
  // Function to handle PDF generation and download
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("PDF Content", 10, 10); // Example content, replace with your data
    doc.save("data.pdf");
  };

  return (
    <div className={style.contaner}>
      <Navbar />
      <div>
        <Header name="Health" />

        <div className={style.content}>
          <div className={`col-md-6 ${style.form}`}>
            <form>
              <p>Update Your Health Details Here: </p>
              <div className={style.formGroup}>
                <input
                  type="text"
                  placeholder="Enter/Update Your Weight Here..."
                  name="weight"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter/Update Your Height Here..."
                  name="height"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter/Update Your Co2 Concentration Here..."
                  name="Co2"
                  required
                />
              </div>
              <div className={style.formGroup} required>
                <select
                  className="form-control"
                  id="bloodType"
                  name="bloodType"
                >
                  <option value="">Select Your Blood Type Here...</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className={style.formGroup} required>
                <select
                  className="form-control"
                  id="smokingStatus"
                  name="smokingStatus"
                >
                  <option value="status">
                    Select Your Smoking Status Here...
                  </option>
                  <option value="smoker">Smoker</option>
                  <option value="non-smoker">Non-Smoker</option>
                  <option value="former-smoker">Former Smoker</option>
                </select>
              </div>
              <div className={style.buttons}>
                <button type="submit" className="btn btn-primary" id="submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-success mt-3"
                  id="download"
                  onClick={downloadPDF}
                >
                  Download PDF
                </button>
              </div>
            </form>
          </div>
          <div className={`col-md-3 ${style.boxes}`}>
            <div className={style.text}>
              <h2>Hello Josaphine!</h2>
              <p>-Today it's great day to be fit-</p>
              <ul>
                <li>Your Current Health Data:</li>
              </ul>
            </div>
            <div className={style.row1}>
              <div className={style.box1}>
                <h1>55kg</h1>
                <p>Weight</p>
              </div>
              <div className={style.box2}>
                <h1>155cm</h1>
                <p>Height</p>
              </div>
            </div>
            <div className={style.row2}>
              <div className={style.box3}>
                <h1>30%</h1>
                <p>Co2 Conc:</p>
              </div>
              <div className={style.box4}>
                <h1>A+</h1>
                <p>Blood Type</p>
              </div>
            </div>
            <div className={style.row3}>
              <div className={style.box5}>
                <h1>Smoker</h1>
                <p>Smoking Status</p>
              </div>
            </div>
          </div>
          <div className={`col-md-2 ${style.image}`}>
            <img src={Girl} alt="Girl" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
