import React from 'react'
import Photo1 from '../Images/Photo1.png'
import Button from '../atom/Button'


var sectionStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "88%",
    height: "1000px",
    backgroundImage: `url(${Photo1})`,
    marginLeft:"6%",
    marginRight:"6%",
    flexDirection:"column",
    opacity:"98%"
};
var pStyle={
    fontSize:"80px",
    color:'white',
    textAlign:"center",
    fontFamily:"Garamond",
    letterspacing:"5px",
    wordSpacing:"10px",   
};
var hStyle={
    color:'white',
    fontFamily:"Garamond",
    letterspacing:"5px",
}

function BackgroundImage() {
  return (
    <div>
        <section style={sectionStyle}>
            <p style={pStyle}>THE ART OF FOOD</p>
            <h1 style={hStyle}>PHOTOGRAPHY</h1>
            <Button/>
        </section>
    </div>
  )
}

export default BackgroundImage