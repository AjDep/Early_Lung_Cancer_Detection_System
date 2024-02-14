import Navbar from "../../components/Navbar/navbar";
import Analysis from "../Analysis/analysis";
import style from './homepage.module.css';

function Homepage(){
    return(
        <div className={style.box}>
            <Navbar/>
            <Analysis/>
        </div>
    );
}

export default Homepage