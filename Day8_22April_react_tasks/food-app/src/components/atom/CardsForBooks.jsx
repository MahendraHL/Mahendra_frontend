import React from 'react'
import Card from 'react-bootstrap/Card';
import Photo6 from '../Images/Photo6.webp'
function CardsForBooks() {
  return (
    <div>

         <Card className="d-group" style={{ width: '88%', justifyContent: "center", height: '500px', display: "flex", flexDirection: "row", marginLeft: "6%", marginRight: "6%",backgroundColor:"whitesmoke" }}>

         <Card.Body style={{textAlign:"justify",fontFamily:'Garamond',paddingLeft:"10%",paddingRight:"10%"}}>
        <Card.Title> <br /><br /><br /><br />
        <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
        <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={Photo6} style={{ width: "50%", height: "100%", display:"flex"}} />
     
    </Card>
    </div>
  )
}

export default CardsForBooks