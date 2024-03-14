import Header from './../../components/header/header';
import Bottem_card from './../../components/Analysis/bottem_card';
import Pie_chart from './../../components/Analysis/pie_chart';
import Navbar from './../../components/Navbar/navbar';
import style from './anlysis.module.css';
import lung from './../../assets/Lung 2.png'

function Analysis(){

  const cards =[
   {Details:"Number of people with the same result.", value:"2563"},
   {Details:"Number of cancer patients with identical alkane levels." , value:"1538"},
   {Details:"Non-cancer individuals with equivalent alkane levels.", value:"1025"},
   {Details:"Similar alkane levels as a percentage of total users.", value:"25.3%"},
   {Details:"Cancer-diagnosed individuals as a percentage.", value:"60.0%"},
  ]

    return(
   
    <div>
      <Header name="Analysis"/>
      <div className="content">
        <div className={style.top_container}>
          <Pie_chart/>
          <img src={lung} alt=""  className={style.lung}/>
        </div>

        <div className={style.bottem_container}>
          <div className={style.bottem_left}>
            {
              cards.map((card,i) =>{
                  return(
                    <Bottem_card key={i} Details={card.Details} value={card.value} />
                  );
                }
              ) 
            }
  
          </div>
          <div className={style.bottem_right}>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Analysis;