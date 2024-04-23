import React from 'react'
import NavBar from './NavBar'
import Photo1 from './Images/Photo1.png'
import Photo2 from './Images/Photo2.png'
import Photo3 from './Images/Photo3.png'


function Portfolio() { 
    return (
        <div>
           <NavBar/>
            <br /><br />
            <center><button style={{ color: 'blue', border: '0px', borderRadius: '15px', width: 'mar-content', padding: '5px' }}>Portfolio</button>
                <br /><br />
                <h1>Check our <button style={{ color: 'blue', border: '0px', backgroundColor: 'white' }}>Portfolio</button></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia, similique quia asperiores magnam sapiente omnis eveniet quod nemo, quis corporis natus rerum esse repudiandae?</p><br />
                <pre>ALL      APP     CARD        WEB</pre>
                <img src={Photo1} alt="Photo1" style={{width:"300px", height:"300px"}}/>
                <img src={Photo2} alt="Photo2" style={{width:"300px", height:"300px"}}/>
                <img src={Photo3} alt="Photo3" style={{width:"300px", height:"300px"}}/>
            </center>
        </div>
    )
}

export default Portfolio