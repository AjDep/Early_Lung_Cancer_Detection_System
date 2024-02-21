import Header from './../../components/header/header';
import Navbar from './../../components/Navbar/navbar';
import style from './profile.module.css';


function Profile(){
    return(
    <div className={style.contaner}>
    <Navbar/>
      <div>
        <Header name="Profile"/>
        <div className={style.content}>
          <div className={style.profileContainer}>
              <div className={style.image}>
                <img src = {BackgroundImage} alt="backgroundImage" className={style.image}/>
              </div>
          </div>
        </div>
      </div>
    </div>


    );
}

export default Profile;