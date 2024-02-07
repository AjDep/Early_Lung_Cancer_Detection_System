import Header from './../../components/header/header';
import Bottem_card from './../../components/Analysis/bottem_card';
import Pie_chart from './../../components/Analysis/pie_chart';
import Navbar from './../../components/Navbar/navbar';
import style from './anlysis.module.css';


function Analysis(){
    return(
    <div className={style.contaner}>
    <Navbar/>
      <div>
        <Header name="Analysis"/>
        <div className={style.content}>
          <div className={style.top_container}>
           <Pie_chart/>
          </div>
          <div className={style.bottem_container}>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
            <Bottem_card Details="asdasdsa" value="213"/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Analysis;