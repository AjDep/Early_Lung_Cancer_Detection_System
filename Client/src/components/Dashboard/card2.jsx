
import s from "./card2.module.css";
import doctor_image from '../../assets/doctor-image.svg';

function Card2(props){
    return(
        <div className={s.card}>
            <div className={s.container}>
                <div>
                    <h1>{props.Details}</h1>
                    <p>{props.value}</p>
                </div>
                <div className={s.imageContainer}>
                    <img src={doctor_image} alt="doctorimage" className={s.doctorImage} />
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    );
}

export default Card2;