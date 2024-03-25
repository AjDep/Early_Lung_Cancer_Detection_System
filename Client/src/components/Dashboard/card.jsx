
import s from "./card.module.css";



function Card(props){
    return(
        <div className={s.card}>
            <div className={s.container}>
                <div>
                    <p>{props.icon}</p>
                </div>
                <div>
                    <h5>{props.value}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;