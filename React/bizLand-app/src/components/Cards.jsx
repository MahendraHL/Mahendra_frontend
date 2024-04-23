import React from 'react'
import Card from 'react-bootstrap/Card';
import Photo4 from './Images/Photo4.jpg'
import Photo5 from './Images/Photo5.jpg'
import Photo6 from './Images/Photo6.jpg'
import Photo7 from './Images/Photo7.jpg'

export default function Cards() {
  return (
    <div>
        <div className='d-flex' style={{flexDirection:'row', width:'70%', margin:'auto', padding:'10px', textAlign:'left'}}>
                    <Card style={{ width: '300px', marginLeft:"20px" }}>
                        <Card.Img variant="top" src={Photo4} />
                        <Card.Body>
                            <Card.Title>Walter WHite</Card.Title>
                            <Card.Text>
                               Chief Executive Officer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '300px', marginLeft:"20px" }}>
                        <Card.Img variant="top" src={Photo5} />
                        <Card.Body>
                            <Card.Title>Sarah Jhonson</Card.Title>
                            <Card.Text>
                               Product Manager
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '300px', marginLeft:"20px" }}>
                        <Card.Img variant="top" src={Photo6} />
                        <Card.Body>
                            <Card.Title>William Anderson</Card.Title>
                            <Card.Text>
                               CTO
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '300px', marginLeft:"20px" }}>
                        <Card.Img variant="top" src={Photo7} />
                        <Card.Body>
                            <Card.Title>James Anderson</Card.Title>
                            <Card.Text>
                                Accountant
                            </Card.Text>
                        </Card.Body>
                    </Card>
    </div>
    </div>
  )
}

