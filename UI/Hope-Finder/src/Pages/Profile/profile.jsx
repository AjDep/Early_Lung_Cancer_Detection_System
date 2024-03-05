import Header from './../../components/header/header';
import Navbar from './../../components/Navbar/navbar';
import style from './profile.module.css';
import Background from './../../assets/Background.png';
import Profile_img from './../../assets/Profile_img.png';

function Profile(){
    return(
    <div className={style.contaner}>
    <Navbar/>
      <div>
            <Header name="Profile"/>
            <div className={style.content}>
            <div className={style.image}>
                  <img src = {Background} alt="Background" className={style.image}/>
            </div>
            <div className={style.Profile_img}>
                  <img src = {Profile_img} alt="Profile_img" className={style.Profile_img}/>
            </div>
            <div className={style.profileHead}>
                  <h4>Josephine Lang</h4>
                  <h5>Student</h5>
            </div>
            <div className={style.submitContainer}>
                  <div className={style.submit}>Edit</div>
            </div>

            <div className={style.boxcontainer}>
            <div className={style.box1}>
                  <h2>General Information</h2>
                  <p>NIC            : 200256803710</p>
                  <p>Address        : Ramukkana,Bandaragama</p>
                  <p>Postal Code    : 12560</p>
                  <p>Date of Birth  : 12 Nov 2002</p>
                  <p>Age            : 21</p>
                  <p>Gender         : Female</p>
            </div>
            
            <div className={style.box1}>
            <h2>Contact Details</h2>
            <div className={style.box2}>
                  <p>+94 714460045</p>
            </div>
            <div className={style.box2}>     
                  <p>w.hopefinder@gmail.com</p>
            </div>
           
            </div>
            </div>

            
        

            </div>
      </div>


        
        
    </div>
    
    );
}

export default Profile;