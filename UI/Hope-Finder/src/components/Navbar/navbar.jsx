import Logo from './../../assets/Logo.svg';
import Dashboard from './../../assets/Navbar_Dashboard_btn.svg';
import Profile from './../../assets/Navbar_Profile-Icon.svg';
import Health from './../../assets/Navbar_Health-Icon.svg';
import History from './../../assets/Navbar_History_btn.svg';
import Setting from './../../assets/Setting_Settings_Btn.svg';
import LogOut from './../../assets/Navbar_Log-Out-icon.svg';
import style from './navbar.module.css'

function Navbar(){
    return(
        <div className={style.navbar}>   
            <div className={style.top}>
                <img src={Logo} alt="Logo" className={style.logo}/>
            </div>

            <div className={style.mid}>
                <img src={Dashboard} alt="Dashboard" className={style.dashboard}/>
                <img src={Profile} alt="Profile" className={style.profile}/>
                <img src={Health} alt="Health" className={style.health}/>
            </div>

            <div className={style.bottem}>
                <img src={History} alt="History" className={style.history}/>
                <img src={Setting} alt="Settings" className={style.setting}/>
                <img src={LogOut} alt="Log Out" className={style.logout}/>
            </div>
      </div>
    );
}

export default Navbar