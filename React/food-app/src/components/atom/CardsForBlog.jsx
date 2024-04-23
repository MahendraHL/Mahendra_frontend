import React from 'react'
import Card from 'react-bootstrap/Card';
import Photo7 from '../Images/Photo7.webp'
import Photo8 from '../Images/Photo8.webp'
import Photo9 from '../Images/Photo9.webp'
import Photo10 from '../Images/Photo10.webp'
import Photo11 from '../Images/Photo11.webp'
import Photo12 from '../Images/Photo12.webp'


function CardsForBlog() {
  return (
    <div>
      <section  style={{ width: '88%', justifyContent: "center", height: '100%', display: "flex", flexDirection: "column", marginLeft: "6%", marginRight: "6%", backgroundColor: "whitesmoke",alignItems:"center" }}>
      <Card className="d-group" style={{width:"80%",flexDirection: "row", marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo7} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-group" style={{width:"80%",flexDirection: "row",marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo8} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-group" style={{width:"80%",flexDirection: "row", marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo9} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-group" style={{width:"80%",flexDirection: "row",marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo10} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-group" style={{width:"80%",flexDirection: "row", marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo11} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-group" style={{width:"80%",flexDirection: "row",marginTop:"30px"}}>
        <Card.Img variant="top" src={Photo12} style={{ width: "50%", height: "100%", display: "flex" }} />
        <Card.Body style={{ textAlign: "justify", fontFamily: 'Garamond', paddingLeft: "10%", paddingRight: "10%" }}>
          <Card.Title> <br /><br /><br /><br />
            <h1>BREAKFASTS</h1></Card.Title> <br /> <br />
          <Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi doloribus fugit assumenda vel dicta ad et deserunt, fuga, vero dolores neque nam iure, dolore sequi odio expedita ipsam maxime?</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </section>
   </div>
      )
}

      export default CardsForBlog