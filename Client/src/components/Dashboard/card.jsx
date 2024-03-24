
import s from "./card.module.css";



function Card(props){
    return(
        <div className={s.card}>
            <div className={s.container}>
                <div>
                    <p>{props.icon}</p>
                </div>
                <div>
                    <h3>{props.value}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;