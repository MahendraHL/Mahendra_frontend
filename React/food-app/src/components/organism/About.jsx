import React from 'react'
import NavBar from '../molecules/NavBar'
import CardForAbout from '../atom/CardForAbout'
import Logo from '../atom/Logo'

var hStyle = {
    fontSize: "50px",
    color: "black",
    fontFamily: "Garamond",
    letterspacing: "5px",
    wordSpacing: "20px",
    textAlign: "center"
}

function About() {
  return (
    <div className='d-group'>
        <NavBar/><br />
        <p style={hStyle}>ABOUT</p>
        <CardForAbout/>
        <Logo/>
    </div>
  )
};

export default About