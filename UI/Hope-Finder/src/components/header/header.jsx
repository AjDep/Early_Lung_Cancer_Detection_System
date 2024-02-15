import style from "./header.module.css";
import ReactSwitch from "react-switch";


function Header(props){
    return(
        <div className={style.header}>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div className={style.switch}>
            
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>*/}
            
            </div>
       
        </div>
    );
}

export default Header;