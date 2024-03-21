import Header from './../../components/header/header';
import Navbar from './../../components/Navbar/navbar';
import style from './settings.module.css';
import Profile from './../../assets/Profile_img.png';

function Settings(){
    return(
    <div className={style.contaner}>
    <Navbar/>
      <div>
        <Header name="Settings"/>
        <div className={style.content}>
          <div className={style.top_container}>
            <a href ="#my details">My details</a>
            <a href ="#profile">Profile</a>
            <a href ="#password">Password</a>
            <a href ="#email">Email</a>
            <a href ="#notification">Notification</a>
          </div>

          <div className={style.profileContainer}>
            <div className={style.image}>
              <img src = {Profile} alt="Profile" className={style.girl}/>
            </div>

            <div className={style.profileHead}>
              <h4>Josephine Lang</h4>
              <h5>Student</h5>
            </div>
          </div>

          <div className={style.profileBody}>
          <div className={style.profile}>
            <h5>Profile</h5>
            <h6>Update your profile and personal details here</h6>
            <div className={style.emptyBox1}></div> {/* Empty box added here */}
          </div>


            <div className={style.userName}>
              <h5>User name</h5>
              <div className={style.measurementInputOne}>
                <input type='text' placeholder='Untitle.com'/>
                <input type='text' placeholder='Josephine Lang'/>
              </div>
              <div className={style.emptyBox2}></div> {/* Empty box added here */}

            </div>

            <div className={style.photo}>
              <h5>Your photo</h5>
              <h6>This will be displayed on your profile</h6>
              <div className={style.photoContent}>
              <img src = {Profile} alt="Profile" className={style.profileImage}/>
                <div className={style.submitContainer}>
                  <div className={style.submit}>Delete</div>
                  <div className={style.submit}>Update</div>
                </div>
                <div className={style.emptyBox3}></div> {/* Empty box added here */}
              </div>
              </div>  

            <div className={style.bio}>
              <h5>Your bio</h5>
              <div className={style.bioIntro}>
                <textarea 
                  placeholder='Write a short Introduction'
                  className={style.bioTextarea}/>
                  <div className={style.emptyBox4}></div> {/* Empty box added here */}
            </div>

            </div>

            <div className={style.email}>
              <h5>Contact Email</h5>
              <div className={style.measurementInputTwo}>
                <input type='text' placeholder='example@gmail.com'/>
              </div>

            </div>
          </div>




          </div>
        </div>
      </div>



    );
}

export default Settings;


