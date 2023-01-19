import React, { useState } from 'react'

function TextAnalyzer() {
    const [text,setText] = useState("");
    const handleOnChange = (event)=> setText(event.target.value);
    const copyToClipboard = () => navigator.clipboard.writeText(text)
    const convertToUppercase = ()=> setText(text.toUpperCase())
    const convertToLowercase = ()=> setText(text.toLowerCase())
    const convertToTitleCase = ()=> setText(text.replace(/\w\S*/g,function(txt) {return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();}))
    const convertToSentenceCase = ()=> setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()}))
    const removeSpaces = ()=> setText(text.replace(/\s/g,''))
    const stringifyContent = ()=> setText(JSON.stringify(text))
    const clearContent = ()=> setText("")
    const countWord = () =>{
        let txtSplit = [];
        txtSplit = text.split(" ");
        let i = 0;
        for(let j = 0; j < txtSplit.length;j++) {
            if(txtSplit[j].length>0) i++
        }
        return i;
    }

    const prettyPrint = ()=>{
        try{
            var pretty = JSON.stringify(JSON.parse(text),undefined, 4);
            setText(pretty)
        }catch(err){
            alert("Not a valid JSON")
        }
    }

    const unStringifyContent = () =>{
        try{
            let txtCopy = JSON.parse(text); 
            if(typeof txtCopy !== 'object')
                setText(txtCopy);
            else
                throw new Error("Already unstringified")

        } catch(err){
            alert("Not a Valid JSON String");
        }
    }
    const titleStyle =  {
        border: "0px solid black",
        color: "hsl(89, 43%, 51%)",
        textAlign: "center",
        fontWeight: "bold",
        margin: "auto",
        fontStyle: "oblique",
        textShadow: "2px 2px black",
    }

    return (
      <>
      <div className='container'>
        <div className="form-group text-center mx-2">
            <label htmlFor="text" style={titleStyle}><h1>Enter Text To Analyze & Convert</h1></label>
            <textarea className="form-control" id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <br></br>
        <div className='container'>
            <button className='btn btn-info mx-1' onClick={copyToClipboard}>Copy</button>
            <button className='btn btn-primary mx-1' onClick={convertToUppercase}>Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={convertToLowercase}>Lower Case</button>
            <button className='btn btn-primary mx-1' onClick={convertToTitleCase}>Title Case</button>
            <button className='btn btn-primary mx-1' onClick={convertToSentenceCase}>Sentence Case</button>
            <button className='btn btn-primary mx-1' onClick={removeSpaces}>Remove Spaces</button>
            <button className='btn btn-primary mx-1' onClick={stringifyContent}>Stringify </button>
            <button className='btn btn-primary mx-1' onClick={unStringifyContent}>UnStringify </button>
            <button className='btn btn-primary mx-1' onClick={prettyPrint}>Prettify JSON</button>
            <button className='btn btn-danger mx-1' onClick={clearContent} style={{float:"right"}}>Clear</button>
        </div>
        </div>
        <br></br>
        <div className='container'>
            <h5>Time To Read: <span style={{"color":"blue"}}>{text.length * 0.008} Minutes</span></h5>
            <h5>Number of Characters(including spaces): <span style={{"color":"blue"}}>{text.length}</span></h5>
            <h5>Number of Characters(without spaces): <span style={{"color":"blue"}}>{text.replace(/\s/g,'').length}</span></h5>
            <h5>Number of Sentences: <span style={{"color":"blue"}}>{text.length === 0 ? 0 : text.split(/[\w\s]+[.!?]/).length - 1}</span></h5>
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