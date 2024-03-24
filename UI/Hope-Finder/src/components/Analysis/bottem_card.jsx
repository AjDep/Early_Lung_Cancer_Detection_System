import s from "./bottem_card.module.css"
function Bottem_card(props){
    return(
        <div className={s.bottem_card}>
            <div>
                <p>{props.Details}</p>
            </div>
            <div>
                <h1>{props.value}</h1>
            </div>
        </div>
    );
}

export default Bottem_card;