import React,{useState, usestate} from 'react'




export default function TextForm(props) 

{
    const [ text, setText] = useState('')
    const handleUpper = ()=>{

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLower = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success")


    }
    const handleOnChange = (event)=>{
        
        console.log("Onchange was clicked");
        setText(event.target.value);
    
    }
    const handleClear = () => {
        
        let newtext = '';
        setText(newtext);
        props.showAlert("Cleared","success")

    
    }
    const handleSpace = () => {

        let newtext = text.split(/[  ] + /);
        setText(newtext.join(" "))
        props.showAlert("Removed Extra Spaces","success")

    }
    return (
        <>
        <div>
            
        <div className="mb-3 mx-3">
            <h1>{props.heading}</h1>
            <textarea style={{backgroundColor :props.mode === 'dark'?'#212529':'white',color :props.mode === 'dark'? 'white' : 'black'}} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <div className="btn btn-primary" onClick={handleUpper}>Convert to Uppercase</div>
        <div className="btn btn-primary my=3" onClick={handleLower}>Convert to Lowercase</div>
        <div className="btn btn-primary my=3" onClick={handleClear}>Clear</div>
        <div className="btn btn-primary my=3" onClick={handleSpace}>Remove Extra Spaces</div>
        </div> 
        </div>
        <div className="container my-3">
        <br/><br/>
            <h2>Your text summary</h2>
            <p>Characters :{text.length} <br/> Words : {text.length>0?text.split(" ").length:0}</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something in the above text box to preview it here" }</p>
        </div>
        </>
  )
}
