import { Component } from "react";
class ClassBasedComponent extends Component{
    render() {
        return<h1>Yohoho Yohohohohooooooo<br/>Watashi Brook! Yohohohohooooooo<br/>{this.props.messagecontent}<br/>{this.props.code}</h1>
    }
}

export default ClassBasedComponent;