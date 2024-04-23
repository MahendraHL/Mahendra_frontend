import React from 'react'
import CardsForBlog from '../atom/CardsForBlog'
import NavBar from '../molecules/NavBar'
import Logo from '../atom/Logo'

var hStyle = {
    fontSize: "50px",
    color: "black",
    fontFamily: "Garamond",
    letterspacing: "5px",
    wordSpacing: "20px",
    textAlign: "center"
}
function Blog() {
  return (
    <div>
        <NavBar /><br />
        <p style={hStyle}>MY BLOG</p>
        <CardsForBlog/>
        <Logo/>
    </div>
  )
}

export default Blog