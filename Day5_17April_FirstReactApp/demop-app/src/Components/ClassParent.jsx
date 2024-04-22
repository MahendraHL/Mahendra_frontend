import React, {Component} from "react";
import  ClassChild  from "./ClassChild";

export class ClassParent extends Component{
    constructor(){
        super();
        this.state={
            name:"King"
        }
        console.log("Parent constructer");
    }

render(){
    console.log("Parent render");
    return(
        <>
        <ClassChild name={this.state.name}/>
        <button onClick={()=>this.setState({name:"Oliver"})}>change</button>
        </>
    ); 
}

componentDidUpdate(){
    console.log("parent componentdidupdate");
}
componentDidMount(){
    console.log("Parent ComponentDidMount");
}




}
export default ClassParent