import React from 'react'
import Form from 'react-bootstrap/Form';


function Forms() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control type="FirstName*" style={{ width: "400px", border: "1px solid black", backgroundColor: 'transparent' }} />
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control type="LastName*" style={{ width: "400px", border: "1px solid black", backgroundColor: 'transparent' }} />
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" style={{ width: "400px", border: "1px solid black", backgroundColor: 'transparent' }} />
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="subject" style={{ width: "400px", border: "1px solid black", backgroundColor: 'transparent' }} />

                    <Form.Label>Messasge*</Form.Label> <br />
                    <textarea name="" id="" cols="52" rows="5"></textarea><br />
                    <button style={{ color: "white", backgroundColor: "black", marginLeft: '300px', width: "100px" }}>Submit</button><br /><br /><br />
                    <p>Stay Up-To-Date with New Posts</p>
                    <table>
                        <tr>
                            <td> <Form.Control type="email" style={{ width: "290px", border: "1px solid black", backgroundColor: 'transparent' }} /></td>
                            <td><button style={{ color: "white", backgroundColor: "black", marginLeft: '10px', width: "100px" }}>Subscribe</button></td>
                        </tr>
                    </table>
                   
                    
                </Form.Group>
            </Form>

        </div>
    )
}

export default Forms