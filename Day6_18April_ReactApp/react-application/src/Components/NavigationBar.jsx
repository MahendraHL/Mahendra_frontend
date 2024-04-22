import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" ><h2>Crepic photography</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-underline">
            <Nav.Link href="#photography">PHOTOGRAPHY</Nav.Link>
            <Nav.Link active-link href="#films">FILMS</Nav.Link>
            <Nav.Link href="#stories">STORIES</Nav.Link>
            <NavDropdown title="ABOUT" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#about/3.1">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="#faqs/3.2">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item href="#testimonials/3.3">TESTIMONIALS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#pacakges/3.4">
                PACKAGES
              </NavDropdown.Item>
              <NavDropdown.Item href="#career/3.5">
                CAREER
              </NavDropdown.Item>
              <NavDropdown.Item href="#press/3.6">
                IN THE PRESS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href='#contact'>CONTACT</Nav.Link>
            </Nav>
            
          <Nav>
            <Form className="search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;