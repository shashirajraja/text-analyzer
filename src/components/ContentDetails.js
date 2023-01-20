import React from 'react'
import PropTypes from 'prop-types'

function ContentDetails(props) {
    const {content} = props;
    const {mode} = props;
    const contentKeyStyle = {
        color : `${mode === "light"? "black":"white"}`,
    }
    const contentValueStyle = {
        color : `${mode === "light"? "blue":"pink"}`,
        fontWeight:"bold"
    }
    const countWord = () =>{
        let txtSplit = [];
        txtSplit = content.split(" ");
        let i = 0;
        for(let j = 0; j < txtSplit.length;j++) {
            if(txtSplit[j].length>0) i++
        }
        return i;
    }

    return (
    <>
        <div className={(mode === "light" ? "bg-white text-dark " : "bg-secondary text-white")}>
        <div className='container px-5 '>
            <h4 className={`text-warning text-center ${mode==='dark'?"contentTitle text-white":""}`}>TEXT ANALYSIS REPORT</h4>
            <hr></hr>
            <div className='row' style={contentKeyStyle}>
                <div className='col-md-4 mx-1'>
                    <h6>Time To Read: <span style={contentValueStyle}>{content.length * 0.008} Minutes</span></h6>
                    <h6>Total Length: <span style={contentValueStyle}>{content.length}</span></h6>
                </div>
                <div className='col-md-3'>
                    <h6>Number of Sentences: <span style={contentValueStyle}>{content.length === 0 ? 0 : content.split(/[\w\s]+[.!?]/).length - 1}</span></h6>
                    <h6>Word Count: <span style={contentValueStyle}>{countWord()}</span></h6>
                </div>
                <div className='col-md-4'>
                    <h6>Number of Characters(including spaces): <span style={contentValueStyle}>{content.length}</span></h6>
                    <h6>Number of Characters(without spaces): <span style={contentValueStyle}>{content.replace(/\s/g,'').length}</span></h6>
                </div>
            </div><hr/>
            <h5 className={`contentTitle ${mode==="dark"?" text-white":""}`}>PREVIEW</h5>
            <p className="container mx-4 mb-5 mt-1">{content}</p>
        </div>
        </div>
    </>
  )
}

ContentDetails.propTypes = {
    content:PropTypes.string.isRequired
}

export default ContentDetails
