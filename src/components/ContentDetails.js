import React from 'react'
import PropTypes from 'prop-types'

function ContentDetails(props) {
    const {content} = props;
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
        <div className='container px-5'>
            <h4 className='text-warning text-center'>Text Analysis Details</h4>
            <hr></hr>
            <div className='row'>
                <div className='col-md-4 mx-1'>
                    <h6>Time To Read: <span style={{"color":"blue"}}>{content.length * 0.008} Minutes</span></h6>
                    <h6>Total Length: <span style={{"color":"blue"}}>{content.length}</span></h6>
                </div>
                <div className='col-md-3'>
                    <h6>Number of Sentences: <span style={{"color":"blue"}}>{content.length === 0 ? 0 : content.split(/[\w\s]+[.!?]/).length - 1}</span></h6>
                    <h6>Word Count: <span style={{"color":"blue"}}>{countWord()}</span></h6>
                </div>
                <div className='col-md-4'>
                    <h6>Number of Characters(including spaces): <span style={{"color":"blue"}}>{content.length}</span></h6>
                    <h6>Number of Characters(without spaces): <span style={{"color":"blue"}}>{content.replace(/\s/g,'').length}</span></h6>
                </div>
            </div><hr/>
            <h5 className='contentTitle' style={{textDecocation:"underline"}}>PREVIEW</h5>
            <p>{content}</p>
        </div>
    </>
  )
}

ContentDetails.propTypes = {
    content:PropTypes.string.isRequired
}

export default ContentDetails
