import React, {useState} from "react";




export default function TestForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = ()=>{
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const clearClick = ()=>{
        setText("");
    }
  return (
    <div>
      <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {/*  */}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</div>
      <div className="btn btn-primary" onClick={clearClick}>Clear Text</div>
      <div className="container my-3">
        <h1 style={{color: props.mode==='light'?'black':'white'}}>Your text Summary</h1>
        <p style={{color: props.mode==='light'?'black':'white'}} >{text.split(" ").length} word and {text.length} characters.</p>
      </div>
    </div>
  );
}
