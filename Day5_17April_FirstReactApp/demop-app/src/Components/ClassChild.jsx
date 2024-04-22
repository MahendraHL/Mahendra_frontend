import React, {Component} from "react";

export class ClassChild extends Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        }
        console.log("child constructer");
    }

render(){
    console.log("Child render");
    return(
        <>
        <h1>{this.props.name}</h1>
        </>
    ); 
}

componentDidUpdate(){
    console.log("child componentdidupdate");
}
componentDidMount(){
    console.log("child ComponentDidMount");
}
}
export default ClassChild