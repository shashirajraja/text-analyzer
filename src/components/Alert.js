import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    let {message, type} = props?.alert
    console.log("I am being called with data:", message, type)
    // type = type.toLowerCase();
    const alertClassName = `alert alert-${type} alert-dismissible fade show`
    
    return message && (
    <>
        <div className={alertClassName} role="alert">
            <strong>{type}</strong> {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </>
  )
}

Alert.propTypes = {
    message:PropTypes.string,
    type: PropTypes.oneOf(["warning","success","info","danger"])
}

export default Alert
