function FunctionEvent(){
    function handleClick(){
        console.log("Button is clicked")
    }
    return(
        <div>
            Functional component<br/>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}
export default FunctionEvent;