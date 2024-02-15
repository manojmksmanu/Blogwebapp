import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    //    <nav classNameNameNameName='navbar navbar-expand-lg navbar-light bg-light'>
    // <div classNameNameNameName='container-fluid bg-faded padding-media'>
    //     <div classNameNameNameName='container padding-media'>
    //         <nav classNameNameNameName='navbar navbar-toggleable-md navbar-light'>
    //             <button  classNameNameNameName='navbar-toggler mt-3'
    //             type='button'
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarSupportedContent"
    //             >

    //             </button>

    //         </nav>

    //     </div>

    // </div>
    //    </nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/details">Details</Nav.Link>
            


          </Nav>

          <Button variant="outline-success">
          <Nav.Link href="/auth">SignUp</Nav.Link>
            </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Header