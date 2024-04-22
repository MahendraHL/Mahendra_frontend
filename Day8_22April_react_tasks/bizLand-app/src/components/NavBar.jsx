import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary d-flex">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ marginLeft: "200px" }}>BizLand.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex" style={{ marginLeft: "400px" }}>
                            <Nav
                                className="me-auto nav-underline"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link active-link='true' href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link href="#action3">Services</Nav.Link>
                                <Nav.Link href="./">Portfolio</Nav.Link>
                                <Nav.Link href="./Team">Team</Nav.Link>
                                <NavDropdown title="Dropdown"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action6">Contact</Nav.Link>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavBar