import React,{Component} from 'react'
import ChildRender from './ChildRender';

export class ParentRender extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    render(){
        console.log("Parent render");
        return(
            <div>
                <ChildRender/>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>
                    Click Here
                </button>
            </div>
        )
    }
}
export default ParentRender
