import React from 'react'
import NavBar from '../molecules/NavBar'
import Logo from '../atom/Logo'
import CardsForBooks from '../atom/CardsForBooks'

var hStyle = {
    fontSize: "50px",
    color: "black",
    fontFamily: "Garamond",
    letterspacing: "5px",
    wordSpacing: "20px",
    textAlign: "center"
}

function Books() {
  return (
    <div>
        <NavBar/><br />
        <p style={hStyle}>BOOKS</p>
        <CardsForBooks/><br />
        <CardsForBooks/><br />
        <CardsForBooks/><br />
        <Logo/>
    </div>
  )
}

export default Books