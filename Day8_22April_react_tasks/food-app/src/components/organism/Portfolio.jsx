import React from 'react'
import NavBar from '../molecules/NavBar'
import Photo2 from '../Images/Photo2.png'
import Photo3 from '../Images/Photo3.png'
import Photo4 from '../Images/Photo4.png'
import Button from '../atom/Button'
import Logo from '../atom/Logo'

var secStyle1 = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    backgroundImage: `url(${Photo2})`,
    width: "400px",
    height: "800px"
};
var secStyle2 = {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${Photo3})`,
    width: "400px",
    height: "800px"
};
var secStyle3 = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    backgroundImage: `url(${Photo4})`,
    width: "400px",
    height: "800px"
};
var pStyle = {
    fontSize: "40px",
    color: "white",
    fontFamily:"Garamond",
    letterspacing:"5px",
    wordSpacing:"10px",
    marginTop:"60px", 
    paddingTop:"20px"
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
    justifyContent:"center"
}

function Portfolio() {
    return (
        <div className='d-group'>
            <NavBar />
            <br />

            <p style={hStyle}>CLIENT ALBUMS</p>
            <div style={fig}>
                <section style={secStyle1}>
                <center>
                    <br /><br />
                    <h1 style={pStyle}>PHOTOGRAPHY</h1><br />
                    <Button />
                    </center>
                </section>

                <section style={secStyle2}>
                <center>
                    <br /> <br />
                    <h1 style={pStyle}>FOOD SERVE</h1><br />
                    <Button />
                    </center>
                </section>

                <section style={secStyle3}>
                    <center>
                        <br /><br />
                    <h1 style={pStyle}>BAKED GOODS</h1><br />
                    <Button />
                    </center>
                    
                </section>
            </div>
            <Logo/>

        </div>

    )
}

export default Portfolio