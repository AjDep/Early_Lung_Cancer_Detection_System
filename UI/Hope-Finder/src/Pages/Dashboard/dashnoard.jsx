import Navbar from '../../components/Navbar/navbar';
import style from './dashboard.module.css';
import Header from './../../components/header/header';

function Dashboard(){
    return(
        <div className={style.contaner}>
            <Navbar/>
            <div>
                <Header name="Dashboard"/>
                <div className={style.content}>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;