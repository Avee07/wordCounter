/*function Hello(props){
    return <h1>Hello World! </h1>
}

 export default Hello;
 */
const name = "Arwinder Singh";
const displayMessage = ()=> {
    return "One Piece"
};
const Hello = ()=> <h1>Hello! I am {name}<br/>{displayMessage()}</h1>
export default Hello;