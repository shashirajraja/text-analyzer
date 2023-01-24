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
    const timeToRead = (wpm)=>{
        // Talk Time estimate is based on the reading rate of 183 words per minute 
        // - which is considered to be the average reading rate for adults according to scientific research. 
        // Silent Reading Time is estimated based on a reading speed of 234 words per minute.
        let timeInSec = countWord() / (wpm/60);
        let timeInMin = 0, timeInMs = 0;
        if(timeInSec >= 60) {
            timeInMin = timeInSec/60;
            timeInSec = timeInSec % 60;
            return `${timeInMin.toFixed(0)} mins ${timeInSec.toFixed(0)} secs.`
        } else if(timeInSec > 0 && timeInSec < 1 ) {
            timeInMs = timeInSec*60;
            return `${timeInMs.toFixed(0)} msec.`;
        }
        return `${timeInSec.toFixed(0)} secs.`;
    }
    const talkTime = timeToRead(183);//183 words per minute
    const silentReadingTime= timeToRead(234); // 234 words per minute
    return (
    <>
        <div className={(mode === "light" ? "bg-white text-dark " : "bg-secondary text-white")}>
        <div className='container-sm px-sm-5 '>
            <h4 className={`text-warning text-center ${mode==='dark'?"contentTitle text-white":""}`}>TEXT ANALYSIS REPORT</h4>
            <hr></hr>
            <div className='row' style={contentKeyStyle}>
                <div className='col-md-4'>
                    <h6>Silent Read Time: <span style={contentValueStyle}>{silentReadingTime}</span></h6>
                    <h6>Talking Time: <span style={contentValueStyle}>{talkTime}</span></h6>
                </div>
                <div className='col-md-3'>
                    <h6>Number of Sentences: <span style={contentValueStyle}>{content.length === 0 ? 0 : content.split(/[\w\s]+[.!?]/).length - 1}</span></h6>
                    <h6>Number of Words : <span style={contentValueStyle}>{countWord()}</span></h6>
                </div>
                <div className='col-md-4'>
                    <h6>Number of Characters(with spaces): <span style={contentValueStyle}>{content.length}</span></h6>
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
