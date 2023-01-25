import React from 'react'
import PropTypes from 'prop-types'

function Spinner(props) {
    const {isLoading} = props
  
    return isLoading && (
    <div className='container-sm text-center my-5'>
        <div className='spinner-grow text-primary mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>L</h5>
        </div>
        <div className='spinner-grow text-secondary mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>O</h5>
        </div>
        <div className='spinner-grow text-success mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>A</h5>
        </div>
        <div className='spinner-grow text-warning mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>D</h5>
        </div>
        <div className='spinner-grow text-danger mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>I</h5>
        </div>
        <div className='spinner-grow text-info mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>N</h5>
        </div>
        <div className='spinner-grow text-dark mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>G</h5>
        </div>
        <div className='spinner-grow text-light mx-sm-1' style={{width:"2rem", height:"2rem"}} role={"status"}>
            <span className='sr-only'>Loading...</span>
            <h5 className='text-white font-weight-bold my-1'>.</h5>
        </div>
    </div>
    
  )
}

Spinner.propTypes={
    isLoading:PropTypes.bool.isRequired
}

Spinner.defaultProps={
    isLoading:false
}

export default Spinner