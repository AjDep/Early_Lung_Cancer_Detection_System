
import s from "./card3.module.css";


function Card3(props){
    return(
        <div className={s.card}>

                <div>
                    <p>{props.Details}</p>
                </div>
                <div >
                    <div>{props.value}</div>
                </div>
                
        </div>
    );
}

export default Card3;