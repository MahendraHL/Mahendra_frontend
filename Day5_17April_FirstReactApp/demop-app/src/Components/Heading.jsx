import React,{ Component } from 'react'

class Heading extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Joseph"
        }
    
    this.handleOnClick=this.handleOnClick.bind(this)
    }
   handleOnClick(){
        this.setState(
            {...this.state,name:"John"}
    );
    }
    
    
render(){
  return (
    <div>
      {/* Heading, {this.props.marks} */}
    <h1>{this.state.name}</h1>
    <button onClick={this.handleOnClick}>Click</button>
    </div>
  )
}
}


export default Heading