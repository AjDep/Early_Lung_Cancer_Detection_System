import style from './home.module.css';
import Container from 'react-bootstrap/Container';
import Home_navbar from '../../components/Home/Home Navbar/home_navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


import Lung_Logo from './../../assets/Lung_Logo.png';
import documents from './../../assets/Documents.png';
import doc from './../../assets/Docotr.png';
import Logo from './../../assets/Logo.svg'

function Home(){
  return(
    <div>
      <Home_navbar/>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">

        
      <Container  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">

        <Row className={style.hero}>

            <div  className="p-6 text-center " style={{marginTop: '87px', height:'600px', paddingTop:'100px'}}>
                <h1   className={style.head_text} >Hope for everyone </h1>
                <h4 className="mb-3">Early lung cancer detecting system.</h4>
                <a className="btn btn-primary" href="" role="button">
                Check Lung for Free
                </a>
            </div>
        </Row>

        
        <Row>
        <h1 style={{fontSize:'45px', fontWeight:'bold'}}>
            Check lungs, store documents, channel a doctor - all in one place
        </h1>
        <p style={{paddingTop:'15px'}}>
            Hope Finder brings check lungs, store medical documents, channel-in   a doctor, and more — together into one place.
        </p>
        </Row>


        <Row className='p-5 row-cols-1  row-cols-xl-3 g-4 py-5'>
            <Col>
                <Card style={{ width: '20rem',height:'12rem', boxShadow: '2px 4px 10px 1px gray '}}>
                    <Card.Body>
                        <Row className="gap-0 p-0 m-0 pb-3">
                            <Col className="p-0 m-0" style={{width:'0px', textAlign:'left'}}>
                                <Image src={Lung_Logo} style={{height:'60px', width:'60px'}}/>
                            </Col>
                            <Col className="p-0 m-0" sm={9}><Card.Title style={{fontSize:'33px', fontWeight:'bold', textAlign:'left',paddingTop:'15px'}}>Check Lungs</Card.Title></Col>
                        </Row>
                        <Card.Subtitle className="mb-2 text-muted">Patient can check their lungs and they can know they are healthy or suffering from lung cancer.
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem',height:'12rem', boxShadow: '2px 4px 10px 1px gray '}}>
                    <Card.Body>
                        <Row className="gap-0 p-0 m-0 pb-3">
                            <Col className="p-0 m-0" style={{width:'0px', textAlign:'left'}}>
                                <Image src={documents} style={{height:'60px', width:'60px',}}/>
                            </Col>
                            <Col className="p-0 m-0" sm={9}><Card.Title style={{fontSize:'33px', fontWeight:'bold', textAlign:'left',paddingTop:'15px'}}>Documents</Card.Title></Col>
                        </Row>
                        <Card.Subtitle className="mb-2 text-muted">Patient can store their other medical documents in the system.
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem',height:'12rem', boxShadow: '2px 4px 10px 1px gray '}}>
                    <Card.Body>
                        <Row className="gap-0 p-0 m-0 pb-3">
                            <Col className="p-0 m-0" style={{width:'0px', textAlign:'left'}}>
                                <Image src={doc} style={{height:'60px', width:'60px'}}/>
                            </Col>
                            <Col className="p-0 m-0" sm={9}><Card.Title style={{fontSize:'33px', fontWeight:'bold', textAlign:'left',paddingTop:'0px'}}>Channel a Doctor</Card.Title></Col>
                        </Row>
                        <Card.Subtitle className="mb-2 text-muted">Patient can channel a doctor or lung cancer clinic.
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


        <Row className="p-5 text-center" style={{marginTop: '0px', height:'600px', paddingTop:'100px'}}>
            <Row style={{paddingTop:'10px'}}>
                <h1 style={{fontSize:'60px', fontWeight:'bold'}}>
                    Why choose Hope Finder ?    
                </h1>
            </Row>
            <Row>
                <Col>
                    <Image src={Logo} style={{height:'500px', width:'500px'}}/>
                </Col>
                    
                <Col style={{textAlign:'left'}}>
                    <h2 style={{paddingTop:'100px', fontWeight:'bold', paddingBottom:'20px'}}>One and best one in the world</h2>
                    <p>Hope Finder is the one and only best technology for early lung cancer detection in the world.</p>
                    <a href="#"><h6 style={{color:'black',fontWeight:'bold', textDecoration:'underline'}}>See More</h6></a>
                </Col>
            </Row>
        </Row>

        <Row style={{backgroundColor:'rgba(0, 0, 0, 0.2)',overflowy:'hidden' }} className='text-center text-white '>
            <div>
            © 2020 Copyright: Hope Finder
            </div>
        </Row>
        
        
      </Container>
      </ThemeProvider>
    </div>
      
  );
}
export default Home;