import React from 'react'

const Form= ()=> {
  return (
    <div>
        <h1>Application from</h1>
        <table>
            <tr>
                <td> <label htmlFor="nm">Name</label></td>
                <td><input type="text" name="nm" id="nm" /></td>
            </tr>
            <tr>
                <td><label htmlFor="age">Age</label></td>
                <td><input type="number" name="age" id="age" /></td>
            </tr>
            <tr>
                <td> <button>Submit</button></td>
            </tr>
        </table> 
    </div>
  )
}

export default Form