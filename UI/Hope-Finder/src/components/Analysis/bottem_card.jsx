import s from "./bottem_card.module.css"
function Bottem_card(props){
    return(
        <div className={s.bottem_card}>
            <p>{props.Details}</p>
            <h1>{props.value}</h1>
        </div>
    );
}

export default Bottem_card;