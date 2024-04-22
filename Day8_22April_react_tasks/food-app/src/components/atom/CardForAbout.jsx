
import Card from 'react-bootstrap/Card';
import Photo5 from '../Images/photo5.png'
function CardForAbout() {
  return (
    <Card className="d-group" style={{ width: '88%', justifyContent: "center", height: '100%', display: "flex", flexDirection: "row", marginLeft: "6%", marginRight: "6%"}}>
      <Card.Img variant="top" src={Photo5} style={{ width: "50%", height: "100%", display:"flex"}} />
      <Card.Body style={{textAlign:"justify",fontFamily:'Garamond',paddingLeft:"10%",paddingRight:"10%",backgroundColor:"whitesmoke" }}>
        <Card.Title> <br /><br /><br /><br />
        <h1> ABOUT JADE</h1></Card.Title> <br />
        <Card.Text>
          <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
          <p> This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p><br /><br />
         
          <h3 >Education:</h3>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p><br /><br />
         
          <h3>Awards & Nominations:</h3>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardForAbout;