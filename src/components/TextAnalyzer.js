import React, { useState } from 'react'

function TextAnalyzer() {
    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const countWord = () =>{
        let txtSplit = [];
        txtSplit = text.split(" ");
        let i = 0;
        for(let j = 0; j < txtSplit.length;j++) {
            if(txtSplit[j].length>0)
                i++
        }
        return i;
    }

    const titleStyle =  {
        border: "0px solid black",
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        margin: "auto",
        fontStyle: "oblique",
        textShadow: "2px 2px #ff0000",
    }
    return (
      <>
      <div className='container'>
        <div className="form-group text-center mx-2">
            <label htmlFor="text" style={titleStyle}><h1>Enter Text To Analyze</h1></label>
            <textarea className="form-control" id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <br></br>
        <div className='container'>
            <button className='btn btn-info mx-1' onClick={(e)=>{navigator.clipboard.writeText(text)}}>Copy</button>
            <button className='btn btn-primary mx-1' onClick={(e)=>{setText(text.toUpperCase())}}>Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={(e)=>{setText(text.toLowerCase())}}>Lower Case</button>
            <button className='btn btn-danger mx-1' onClick={(e)=>{setText("")}} style={{float:"right"}}>Clear</button>
        </div>
        </div>
        <br></br>
        <div className='container'>
            <h5>Time To Read: <span style={{"color":"blue"}}>{text.length * 0.008} Minutes</span></h5>
            <h5>Total Length: <span style={{"color":"blue"}}>{text.length}</span></h5>
            <h5>Word Count: <span style={{"color":"blue"}}>{countWord()}</span></h5>
        </div>
        <div className='container'>
            <h5 style={titleStyle}>PREVIEW</h5>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextAnalyzer