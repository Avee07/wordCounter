import { Component } from "react";
class Event extends Component{
    handleClick(){
        console.log("Class Basedevent handling")
    }
    render(){
        return(
            <div>
                This is a class based component
                <button onClick={this.handleClick}>click here</button>
            </div>
        )
    }
}
export default Event;