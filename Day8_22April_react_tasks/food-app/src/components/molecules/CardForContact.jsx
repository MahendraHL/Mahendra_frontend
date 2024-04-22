import React from 'react'
import Card from 'react-bootstrap/Card';
import Photo from '../Images/Photo.png'
import Forms from '../atom/Forms'

function CardForContact() {
    return (
        <div>

            <Card className="d-group" style={{ width: '88%', justifyContent: "center", height: '100%', display: "flex", flexDirection: "row", marginLeft: "6%", marginRight: "6%" }}>
                <Card.Img variant="top" src={Photo} style={{ width: "50%", height: "100%", display: "flex" }} />
                <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%", backgroundColor: "whitesmoke" }}>
                    <Card.Title> <br /><br /><br /><br />
                        <h1> GET IN TOUCH</h1></Card.Title> <br />
                    <Card.Text>
                        <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
                        <br />

                        <p>Tel: 123-456-7890  |  Email: info@mysite.com
                        </p><br /><br />


                        <Forms/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardForContact