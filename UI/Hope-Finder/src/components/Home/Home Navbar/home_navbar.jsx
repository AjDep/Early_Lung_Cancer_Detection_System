import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import style from './home_navbar.module.css';
import Container from 'react-bootstrap/Container';

import Logo from './../../../assets/Logo.svg';

function Home_navbar(){
    return(
        <div>
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
      </Navbar>
        </div>
    );
}

export default Home_navbar;