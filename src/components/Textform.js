
import React, { useState } from 'react';

export default function Textform(props) {
    const [Text, setText] = useState('Enter your text');
    const padding={
        padding:"20px"
      }
    
    const handleUPClick = () => {
        console.log("uppercase clicked!");
        let newtext = Text.toUpperCase();
        setText(newtext);
    }
    const handleLOClick = () => {
        console.log("Lower clicked!");
        let newtext = Text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = () => {
        console.log("clear clicked!");
        let newtext = " ";
        setText(newtext);
    }
    const handleOnchange = (event) => {
        console.log("Text is change ");
        setText(event.target.value);

    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                {/* <label for="mytextbox" className="form-label">Enter your Text Below</label> */}
                <textarea className="form-control" id="mytextbox" value={Text} onChange={handleOnchange}  style={{background:"#696969",color:"white"}} rows="5"></textarea>
                <br />
                <button type="button" className="btn btn-primary" id='submitbtn' onClick={handleUPClick}>Convert To Uppercase</button>  
                <button type="button" className="btn btn-primary ms-1 " id='submitbtn' onClick={handleLOClick} >Convert To Lowercase</button>
                <button type="button" className="btn btn-primary ms-1 " id='submitbtn' onClick={handleClearClick} >Clear Text</button>
            </div>

            <div className='container' style={padding}>
             <h4>Your Text Summary</h4>
             <p>{Text.split(" ").filter((element)=>{return element.length!=0}).length} words and {Text.length} characters</p>
             <p>{0.008 * Text.split(" ").length} Minutes Read</p>
             <h2>Preview Of text </h2>
             <p>{Text}</p>
            </div>


        </>
    )
}
