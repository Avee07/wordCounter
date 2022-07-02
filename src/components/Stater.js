import { Component } from "react";

class Stater extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
        };
       // this.increment = this.increment.bind(this);
       // this.decrement = this.decrement.bind(this);
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1 ,
        })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1 ,
        })
    }
    componentDidMount(){
        console.log("Component is Mounted")
    }
    componentDidUpdate(prevProps,prevState){

    }
    render(){
        return (
        <div>
        <h4>Count Value is :{this.state.counter}</h4>
        <button onClick= {this.increment}>Increment</button><br/>
        <button onClick= {this.decrement}>Decrement</button>
        </div>
        )

    }
}
export default Stater;