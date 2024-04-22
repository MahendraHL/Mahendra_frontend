import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function NavBar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary d-flex">
                <Container fluid style={{ marginLeft: "6%", padding: '10px' }}>
                    <Navbar.Brand href="#" style={{ letterSpacing: '3px', fontFamily: 'Garamond Premier Pro' }}>
                        <h1>J ALISSA</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" style={{ float:"end",marginLeft:"150px"}}>
                           <Nav className="me-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link style={{paddingLeft:"60px"}} href="./">Home</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./Portfolio">Portfolio</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./About">About</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./Books">Books</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./Blog">Blog</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./Album">Client Albums</Nav.Link>
                                <Nav.Link style={{paddingLeft:"60px"}} href="./Contact">Contact</Nav.Link>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar