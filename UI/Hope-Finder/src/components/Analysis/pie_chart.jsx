
import s from "./pie_chart.module.css";
import graph from "./../../assets/chart.png"

function Pie_chart(){
    return(
        <div className={s.top_card}>
          <img src={graph} alt="" className={s.chart}/>
        </div>
    );
}

export default Pie_chart;



