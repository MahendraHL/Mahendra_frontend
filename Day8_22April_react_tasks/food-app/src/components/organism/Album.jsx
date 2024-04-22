import React from 'react'
import Photo13 from '../Images/Photo13.webp'
import Photo14 from '../Images/Photo14.webp'
import Photo15 from '../Images/Photo15.webp'
import NavBar from '../molecules/NavBar'
import Logo from '../atom/Logo'

var secStyle1 = {
    display: "flex",
    flexDirection: "column",
    marginLeft:"20px",
    backgroundImage: `url(${Photo13})`,
    repeat:"none",
    width: "400px",
    height: "500px"
};
var secStyle2 = {
    display: "flex",
    flexDirection: "column",
    marginLeft:"20px",
    marginRight:"20px",
    backgroundImage: `url(${Photo14})`,
    width: "400px",
    height: "500px"
};
var secStyle3 = {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
    backgroundImage: `url(${Photo15})`,
    width: "400px",
    height: "500px"
};
var pStyle = {
    fontSize: "40px",
    color: "white",
    fontFamily: "Garamond",
    letterspacing: "5px",
    wordSpacing: "10px",
    marginTop: "60px",
    paddingTop: "20px"
}
var hStyle = {
    fontSize: "50px",
    color: "black",
    fontFamily: "Garamond",
    letterspacing: "5px",
    wordSpacing: "20px",
    textAlign: "center"
}
var fig = {
    display: "flex",
    displayDirection: "row",
    justifyContent: "center"
}
var para={
    color:"white",
    fontSize:"20px"
}

function Album() {
    return (
        <div>
            <NavBar />
            <br />

            <p style={hStyle}>CLIENT ALBUMS</p>
            <div style={fig}>
                <section style={secStyle1}>
                    <center>
                        <br /><br />
                        <h1 style={pStyle}>GREEN EDITORIAL</h1><br />
                        <p style={para}>Client: Herbal Magazine</p>
                    </center>
                </section>

                <section style={secStyle2}>
                    <center>
                        <br /> <br />
                        <h1 style={pStyle}>BREAD BAKING RECEPIES</h1><br />
                        <p style={para}>Client: The Baker Blog</p>
                        
                    </center>
                </section>

                <section style={secStyle3}>
                    <center>
                        <br /><br />
                        <h1 style={pStyle}>FRENCH COOKBOOK</h1><br />
                        <p style={para}>Client: La Peche</p>
                        
                    </center>

                </section>
            </div>
            <Logo />
        </div>
    )
}

export default Album