import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';



function Header() {
  return (
   <>
  {['sm' ].map((expand) => (
        <Navbar key={expand} expand={expand} className=" ">
          <Container >
            <Navbar.Brand href="#"><b><span className='text-danger' style={{fontSize:'25px'}}>SPICE</span>SAGA</b></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <b><span className='text-danger' style={{fontSize:'25px'}}>spice</span>saga</b>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link> <Link to={'/'} style={{textDecoration:'none',color:'red',fontWeight:'bold',fontSize:'17px'}}><b>Home</b></Link></Nav.Link>
                  <Nav.Link href="#action2" style={{fontSize:'17px'}}><b>About</b></Nav.Link>
                  <Nav.Link href="#action2"style={{fontSize:'17px'}}><b>chef</b></Nav.Link>
                  <Nav.Link href="#action2"style={{fontSize:'17px'}}><b>Menu</b></Nav.Link>
                  <Nav.Link href="#action2"style={{fontSize:'17px'}}><b>Reservation</b></Nav.Link>
                  <Nav.Link href="#action2"style={{fontSize:'17px'}}><b>blog</b></Nav.Link>
                  <Nav.Link href="#action2"style={{fontSize:'17px'}}><b>Contact</b></Nav.Link>

                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   </>
  )
}

export default Header