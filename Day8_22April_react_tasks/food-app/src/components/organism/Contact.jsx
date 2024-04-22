import React from 'react'
import CardForContact from '../molecules/CardForContact'
import NavBar from '../molecules/NavBar'
import Logo from '../atom/Logo'


function Contact() {
  return (
    <div>
         <NavBar/><br />
       
        <CardForContact/>
        <Logo/>


    </div>
  )
}

export default Contact