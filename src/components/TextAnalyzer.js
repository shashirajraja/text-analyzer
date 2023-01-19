import React, { useState } from 'react'
import ContentDetails from './ContentDetails';

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
        } catch(err){
            alert("Not a Valid JSON String");
        }
    }

    return (
      <>
      <div className='container px-5'>
        <div className="form-group text-center">
            <label htmlFor="text" className='contentTitle'><h2>Enter Text To Analyze & Convert</h2></label>
            <textarea className="form-control" id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <br></br>
        <div className='row'>
            <div className='col-md-5 text-center'>
                <button className='btn btn-info mx-1 my-1' onClick={copyToClipboard}>Copy</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertToUppercase}>Upper Case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertToLowercase}>Lower Case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertToTitleCase}>Title Case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertToSentenceCase}>Sentence Case</button>
            </div>
            <div className='col-md-4 text-center'>
                <button className='btn btn-primary mx-1 my-1' onClick={prettyPrint}>Prettify JSON</button>
                <button className='btn btn-primary mx-1 my-1' onClick={stringifyContent}>Stringify </button>
                <button className='btn btn-primary mx-1 my-1' onClick={unStringifyContent}>UnStringify </button>
            </div>
            <div className='col-md-3 text-center'>
                <button className='btn btn-primary mx-1 my-1' onClick={removeSpaces}>Remove Spaces</button>
                <button className='btn btn-danger mx-1 my-1' onClick={clearContent}>Clear</button>
            </div>
        </div>
    </div>
    <ContentDetails content={text}></ContentDetails>
    </>
  )
}

export default TextAnalyzer