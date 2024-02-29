import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Logo from './../../assets/Logo.svg';
import style from './home.module.css';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Home_navbar from '../../components/Home/Home Navbar/home_navbar';

function Home(){
  return(
    <div>{/*
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" id={style.navbars}>
            <Container className='gap-5'>
              <Navbar.Brand href="#home"><img
                    src={Logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                  </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-5">
      
          <NavDropdown title="Product" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Pricing" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Help" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

            </Nav>
            <Nav>
              
              <Nav.Link eventKey={1} href="#memes" >
                <Button variant="light"  className={style.btn} >Log in</Button>{' '}
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark"  className={style.btn}>Sign up</Button>{' '}
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
            </Container>
      </Navbar>*/}

      <Home_navbar/>
      <Container fluid="md" >
      
      <div id={style.hero} className="p-5 text-center bg-white " style={{marginTop: '87px', height:'964px', paddingTop:'100px'}}>
                <h1   className="mb-3" id={style.head_text}>Hope for everyone </h1>
                <h4 className="mb-3">Early lung cancer detecting system.</h4>
                <a className="btn btn-primary" href="" role="button">
                Check Lung for Free
                </a>
              </div>
 
      
        </Container>
    </div>
      
  );
}
export default Home;