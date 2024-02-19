import style from "./header.module.css";
import ReactSwitch from "react-switch";
import { createContext,useState } from 'react';

export const TheamContext = createContext(null);
function Header(props){
    const [theme,setTheam] = useState("light");

  const toggleTheam = () => {
    setTheam((curr) => (curr === "light" ? "dark" : "light"));
  };

  if(theme === "light"){
    return(
        <TheamContext.Provider value={{theme, toggleTheam}}>
                <div className={style.header} >
                <div>
                    <h1>{props.name}</h1>
                </div>
                <div className={style.switch}>
                </div>
            </div>
        </TheamContext.Provider>
    );
  }else if (theme === "dark"){
    return(
        <TheamContext.Provider value={{theme, toggleTheam}}>
            <div className={style.header} >
                <div>
                    <h1>{props.name}</h1>
                </div>
                <div className={style.switch}>
               
                </div>
            </div>
         </TheamContext.Provider>
    );
  }
}

export default Header;