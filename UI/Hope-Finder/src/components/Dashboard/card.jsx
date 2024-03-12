
import s from "./card.module.css";

function Card(props){
    return(
        <div className={s.card}>
            <p>{props.Details}</p>
            <h1>{props.value}</h1>
        </div>
    );
}

export default Card;