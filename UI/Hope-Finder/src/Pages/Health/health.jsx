import React from "react";
import Header from "./../../components/header/header";
import Navbar from "./../../components/Navbar/navbar";
import style from "./health.module.css";
import Girl from "./../../assets/Girl.png";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Health() {
  return (
    <div className={style.contaner}>
      <Navbar />
      <div>
        <Header name="Health" />
        <div className={style.content}>
          <div className={style.firstColumn}>
            <div className={style.searchBar}>
              {/*<FontAwesomeIcon icon={faSearch} className={style.searchIcon} />*/}
              <input type="text" placeholder="Search here..." />
            </div>

            <div className={style.measurementInputsOne}>
              <input type="text" placeholder="Enter/Update Your Weight" />
              <input type="text" placeholder="Enter/Update Your Height" />
            </div>
            <div className={style.measurementInputsTwo}>
              <select>
                <option value="">Enter/Update Your Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                {/* Add more options as needed */}
              </select>
              <select>
                <option value="">Enter/Update Your Smoking Status</option>
                <option value="smoker">Smoker</option>
                <option value="non-smoker">Non-Smoker</option>
                <option value="ex-smoker">Ex-Smoker</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className={style.measurementInputsThree}>
              <input
                type="text"
                placeholder="Enter/Update Your Co2 Concentration"
              />
            </div>
            <div className={style.viewMore}>
              <button className={style.viewMoreBtn}>View More</button>
            </div>

            <div className={style.bottomButtons}>
              <button className={style.downloadBtn}>Download PDF</button>
              <button className={style.uploadBtn}>Upload Documents</button>
            </div>
          </div>
          <div className={style.secondColumn}>
            <div className={style.wordLine1}>
              <p>Hello Josaphine!</p>
            </div>
            <div className={style.wordLine2}>
              <p>Today it's great day to be fit</p>
            </div>
            <div className={style.boxesContainer}>
              <div className={style.boxes}>
                <p className={style.line1}>A+</p>
                <p className={style.line2}>Blood</p>
              </div>
              <div className={style.boxes}>
                <p className={style.line1}>55kg</p>
                <p className={style.line2}>Weight</p>
              </div>
              <div className={style.boxes}>
                <p className={style.line1}>153cm</p>
                <p className={style.line2}>Height</p>
              </div>
              <div className={style.image}>
                <img src={Girl} alt="A Girl" className={style.girl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
