
import Dashboard from './../../assets/Navbar_Dashboard_btn.svg';
import Profile from './../../assets/Navbar_Profile-Icon.svg';
import Health from './../../assets/Navbar_Health-Icon.svg';
import History from './../../assets/Navbar_History_btn.svg';
import Setting from './../../assets/Setting_Settings_Btn.svg';
import LogOut from './../../assets/Navbar_Log-Out-icon.svg';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

import {Row,Col} from "react-bootstrap";

function Navbar(props){

    if(props.theme === "light"){
        if(props.route === "Dashboard"){
            return(
                <NavLink to={"/"} >
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container} >
                                <img src={Dashboard} alt="Dashboard" className={style.dashboard}/>
                            </div>
                        );
                    }}
                </NavLink>  
            );
        } else if(props.route === "Analysis"){
            return(
                <NavLink to={"/analysis"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container}>
                                 <img src={Profile} alt="Profile" className={style.profile}/>
                            </div>
                        );
                    }}
                </NavLink>  
            );
        } else if(props.route === "Health"){
            return(
                <NavLink to={"/health"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container}>
                                 <img src={Health} alt="Health" className={style.health}/>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        }else if(props.route === "History"){
            return(
                <NavLink to={"/history"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container}>
                                 <img src={History} alt="History" className={style.history}/>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        } else if(props.route === "Setting"){
            return(
                <NavLink to={"/settings"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container}>
                                   <img src={Setting} alt="Settings" className={style.setting}/>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        }else if(props.route === "LogOut"){
            return(
                <NavLink to={"/logout"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.light_container_active :style.light_container}>
                                   <img src={LogOut} alt="Log Out" className={style.logout}/>
                            </div>
                        );
                    }}
                </NavLink> 
                
            );
        }        

    } else if (props.theme === "dark"){
        if(props.route === "Dashboard"){
            return(
                <NavLink to={"/"} >
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container} >
                                <div className={style.imgdiv}>
                                    <img src={Dashboard} alt="Dashboard" className={style.dashboard}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink>  
            );
        } else if(props.route === "Analysis"){
            return(
                <NavLink to={"/analysis"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container}>
                                <div className={style.imgdiv}>
                                    <img src={Profile} alt="Profile" className={style.profile}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink>  
            );
        } else if(props.route === "Health"){
            return(
                <NavLink to={"/health"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container}>
                                <div className={style.imgdiv}>
                                    <img src={Health} alt="Health" className={style.health}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        }
    
        else if(props.route === "History"){
            return(
                <NavLink to={"/history"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container}>
                                <div className={style.imgdiv}>
                                    <img src={History} alt="History" className={style.history}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        } else if(props.route === "Setting"){
            return(
                <NavLink to={"/settings"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container}>
                                <div className={style.imgdiv}>
                                    <img src={Setting} alt="Settings" className={style.setting}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink> 
            );
        }
        else if(props.route === "LogOut"){
            return(
                <NavLink to={"/logout"}>
                    {(linkProps)=>{
                        return(
                            <div className={linkProps.isActive ? style.dark_container_active :style.dark_container}>
                                <div className={style.imgdiv}>
                                    <img src={LogOut} alt="Log Out" className={style.logout}/>
                                </div>
                            </div>
                        );
                    }}
                </NavLink> 
                
            );
        }        

    }   
}

export default Navbar