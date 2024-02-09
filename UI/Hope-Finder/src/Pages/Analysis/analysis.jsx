import Header from './../../components/header/header';
import Bottem_card from './../../components/Analysis/bottem_card';
import Pie_chart from './../../components/Analysis/pie_chart';
import Navbar from './../../components/Navbar/navbar';
import style from './anlysis.module.css';
import lung from './../../assets/Lung 2.png'

function Analysis(){
    return(
    <div className={style.contaner}>
    <Navbar/>
      <div>
        <Header name="Analysis"/>
        <div className={style.content}>
          <div className={style.top_container}>
           <Pie_chart/>
           <img src={lung} alt=""  className={style.lung}/>
          </div>
          <div className={style.bottem_container}>
            
            <div className={style.bottem_left}>
            <Bottem_card Details="Number of people with the same result" value="2563"/>
            <Bottem_card Details="Number of cancer patients with identical alkane levels" value="1538"/>
            <Bottem_card Details="Non-cancer individuals with equivalent alkane levels." value="1025"/>
            <Bottem_card Details="Similar alkane levels as a percentage of total users" value="25.3%"/>
            <Bottem_card Details="Cancer-diagnosed individuals as a percentage" value="60.0%"/>
            
            </div>
            <div className={style.bottem_right}>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Analysis;