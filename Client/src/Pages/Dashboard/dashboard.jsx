import Navbar from '../../components/Navbar/navbar';
import style from './dashboard.module.css';
import Header from './../../components/header/header';
import Card from '../../components/Dashboard/card';
import Card2 from '../../components/Dashboard/card2';
import Card3 from '../../components/Dashboard/card3';
import Calendar from '../../components/Calendar/Calendar';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PieChart from '../../components/PieChart/PieChart';
import ColumnChart from '../../components/ColumnChart/ColumnChart';
import BasicSelect from '../../components/BasicSelect/BasicSelect';
import ScrollableBox from '../../components/ScrollableBox/ScrollableBox';

function Dashboard() {
    return (
      
        <div className={style.contaner}>
            <Navbar />
            <div>
                <Header name="Dashboard" />
                <div className={style.content}>
                    <div className={style.container4}>
                        <div>
                            <div className={style.container2}>
                                <div>
                                    <Card2 Details="Hi Pramoth ! " value="Have you had a routine health check this month ?" />
                                </div>
                                <div >
                                    <Card3 Details="Your Last Breath Test" value={<PieChart />} />
                                </div>
                            </div>

                            {/* <Card Details="Hi Josepine ! Check your health"/> */}
                            <div className={style.bottem_left}>
                                <Card icon={<AssignmentOutlinedIcon />} value="Medical Document" />
                                <Card icon={<HistoryOutlinedIcon />} value="History Analysis" />
                                <Card icon={<MedicalServicesOutlinedIcon />} value="Early Diagnosis" />
                            </div>
                            <div className={style.container3}>
                                <div>
                                    <p>View Your Test History</p>
                                </div>
                                <div>
                                    <BasicSelect />
                                </div>
                            </div>

                            <div>
                                <ColumnChart />
                            </div>

                        </div>
                        <div style={{ marginRight: '35px', marginTop: '20px' }}>
                            <div className='calendar-card'>
                                <Calendar />
                            </div>
                            <div>
                                <div><h3 style={{marginLeft:'25px'}}>Upcoming Test and Appoinments</h3></div>
                                <ScrollableBox />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;