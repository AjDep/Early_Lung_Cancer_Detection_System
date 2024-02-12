import style from "./header.module.css"

function Header(props){
    return(
        <div className={style.header}>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Header;