import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards'

function Team() {
    return (

        <div>
           <NavBar/>
           <br /><br />
            <center><button style={{ color: 'blue', border: '0px', borderRadius: '15px', width: 'mar-content', padding: '5px' }}>Team</button>
                <br /><br />
                <h1>Our Hardworking <button style={{ color: 'blue', border: '0px', backgroundColor: 'white' }}>Team</button></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia, similique quia asperiores <br /> magnam sapiente omnis eveniet quod nemo, quis corporis natus rerum esse repudiandae?</p><br />
                <Cards/>
            </center>
        </div>
    )
}

export default Team