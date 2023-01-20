import React, { useState } from 'react'
import Alert from './common/Alert';
import ContentDetails from './ContentDetails';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

function TextAnalyzer(props) {
    const {mode, toggleMode} = props
    const [text,setText] = useState("");
    const [alert, setAlert] = useState({message:"", type:""})
    const handleOnChange = (event)=> setText(event.target.value);
    const copyToClipboard = () => {navigator.clipboard.writeText(text); showAlert("Copied To Clipboard")}
    const convertToUppercase = ()=> { setText(text.toUpperCase()); showAlert("Converted To Uppercase")}
    const convertToLowercase = ()=> { setText(text.toLowerCase()); showAlert("Converted To Lowercase")}
    const convertToTitleCase = ()=> { setText(text.replace(/\w\S*/g,function(txt) {return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();})); showAlert("Converted To TitleCase")}
    const convertToSentenceCase = ()=> { setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()})); showAlert("Converted To Sentencecase")}
    const removeSpaces = ()=> { setText(text.replace(/\s/g,'')); showAlert("Spaces Removed From the Text")}
    const stringifyContent = ()=> { setText(JSON.stringify(text)) ; showAlert("Text Stringified")}
    const clearContent = ()=> { setText(""); showAlert("Content Cleared")}; 
    const primaryColor = mode === "light" ? "primary" : "dark";
    const showAlert = (message, type="success") => {
        setAlert({"message":message, "type":type}) ;
        setTimeout(function(){
            setAlert({}) 
        },
        2000)
    }

    const prettyPrint = ()=>{
        try{
            var pretty = JSON.stringify(JSON.parse(text),undefined, 4);
            setText(pretty)
            showAlert("Text Formatted to Pretty JSON","success");
        }catch(err){
            showAlert("Text is not a valid JSON","warning")
        }
    }

    const unStringifyContent = () =>{
        try{
            let txtCopy = JSON.parse(text); 
            if(typeof txtCopy !== 'object') 
                setText(txtCopy);
            showAlert("Text Unstringified","success");
        } catch(err){
            showAlert("Text is not a valid JSON String","warning")
        }
    }

    return (
      <>
      <div className={(mode === "light" ? "bg-white text-dark " : "bg-secondary text-white")}>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='d-lg-none p-4 m-0'></div>
      <div className={'container-sm px-sm-5 ' +(mode === "light" ? "bg-white text-dark " : "bg-secondary text-white")}>
        <div className="form-group">
            <label htmlFor="text" className={`contentTitle px-md-5 float-lg-left ${mode==="dark"?" text-white":""}`}><h2>Enter Text To Analyze & Convert</h2></label>
            <textarea className={`form-control ${mode==="dark" ? "bg-dark text-white" : "bg-white text-dark"}`} id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <br/>
        <div className='row'>
            <div className='col-md-5 text-center'>
                <button className='btn btn-sm btn-info mx-1 my-1' onClick={copyToClipboard}>Copy</button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={convertToUppercase}>Upper Case</button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={convertToLowercase}>Lower Case</button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={convertToTitleCase}>Title Case</button>
                <button className='btn btn-sm btn-danger mx-1 my-1' onClick={clearContent}>Clear</button>
            </div>
            <div className='col-md-4 text-center'>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={prettyPrint}>Prettify JSON</button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={stringifyContent}>Stringify </button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={unStringifyContent}>UnStringify </button>
            </div>
            <div className='col-md-3 text-center'>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={removeSpaces}>Remove Spaces</button>
                <button className={`btn btn-sm btn-${primaryColor} mx-1 my-1`} onClick={convertToSentenceCase}>Sentence Case</button>
            </div>
        </div>
    </div>
    <hr/>
    <ContentDetails content={text} mode={mode}></ContentDetails>
    <Footer mode={mode}/>
    </div>
    </>
  )
}

export default TextAnalyzer