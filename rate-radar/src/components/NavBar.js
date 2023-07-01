import { Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Ottawa Tutoring</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Services">Our Tutors</Nav.Link>
              <Nav.Link href='/StudyGroups'>Study Groups</Nav.Link>
              <Nav.Link href="/Aboutus">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar