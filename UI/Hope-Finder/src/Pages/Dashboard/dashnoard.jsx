import Navbar from '../../components/Navbar/navbar';
import style from './dashboard.module.css';
import Header from './../../components/header/header';
import Card from '../../components/Dashboard/card';
import Calendar from '../../components/Calendar/Calendar';
import chart from '../../assets/dashboard_chart.png';

function Dashboard(){
    return(
        <div className={style.contaner}>
            <Navbar/>
            <div>
                <Header name="Dashboard"/>
                <div className={style.content}>
                    <div className={style.container}>
                        <div>
                            <Card/>
                            <Card Details="Hi Josepine ! Check your health"/>
                            <div className={style.bottem_left}>
                                <Card Details="Alkane" value="High"/>
                                <Card Details="Weight" value="52"/>
                                <Card Details="Blood Sugar" value="100"/>
                                <Card Details="BMI" value="19"/>
                            </div>
                            <img src={chart} alt="" className={style.chart} />
                        </div>
                        <div>
                            <div className='calendar-card'>
                                <Calendar/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;