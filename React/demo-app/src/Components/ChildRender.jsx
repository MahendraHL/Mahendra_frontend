import React,{PureComponent} from 'react'


export class ChildRender extends PureComponent {
    render(){
        console.log("Child Render");
        return(
        <div>Child</div>
 )   }
}
export default ChildRender
    
