import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';



function NavBar() {

    return(
      <div className="nav-bar">
          <Navbar className="nav" variant="light">
            <Container>
            <Navbar.Brand href="#/">
              Home
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#chat">Chat</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      </div>
    )
  }

  export default NavBar; 