import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forms.css'

export const Forms = () => {
  return (


    <div>
      <center><br /><br />
        <h1>Connect With Our Digital Marketing Experts</h1><br /><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias totam voluptatibus dolores dolore iure neque possimus laudantium delectus enim asperiores id impedit corrupti atque a sequi sunt</p><br /><br />
      </center>
<div style={{width:"50%",margin:"auto",padding:"10px", backgroundColor:"white",borderRadius:"10px"}}>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Enter Name" style={{width:"200px"}}/>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="email" placeholder="Enter Phone number"  style={{width:"200px"}}/>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  style={{width:"200px"}}/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control as="textarea" placeholder="Leave a comment here"  style={{height:"177px"}}/>
        </Col>
        <center>
      <Button variant="primary" size="lg">
        Block level button
      </Button></center>
        <br />
      </Row>
      
      </div>

    </div>
  );
}
export default Forms