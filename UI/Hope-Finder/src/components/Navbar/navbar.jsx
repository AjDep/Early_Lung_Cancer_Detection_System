import Dashboard from "./../../assets/Navbar_Dashboard_btn.svg";
import Profile from "./../../assets/Navbar_Profile-Icon.svg";
import Health from "./../../assets/Navbar_Health-Icon.svg";
import History from "./../../assets/Navbar_History_btn.svg";
import Setting from "./../../assets/Setting_Settings_Btn.svg";
import LogOut from "./../../assets/Navbar_Log-Out-icon.svg";

import Logo from "./../../assets/Logo.svg";
import style from "./navbar.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbar(props) {
  return (
    <Col id={style.navset} gap={3} className="col-md-5">
      <Row>
        <img src={Logo} alt="" height={'70px'}/>
      </Row>

      <Row>
        <img src={Dashboard} alt="Dashboard" className={style.dashboard} />
        <img src={Profile} alt="Profile" className={style.profile} />
        <img src={Health} alt="Health" className={style.health} />
      </Row>

      <Row>
        <img src={History} alt="History" className={style.history} />
        <img src={Setting} alt="Settings" className={style.setting} />
        <img src={LogOut} alt="Log Out" className={style.logout} />
      </Row>
    </Col>
  );
}

export default Navbar;
