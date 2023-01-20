import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    let {message, type} = props?.alert
    const convertToTitleCase = (text)=> text.replace(/\w\S*/g,function(txt) {return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();})
    const alertClassName = `alert alert-${type} alert-dismissible fade show pt-1 pb-1 mt-1 mb-1`
    return message && (
    <>
        <div className={alertClassName} role="alert">
            <strong><strong>{convertToTitleCase(type)}</strong>: {message}</strong>
            <button type="button" className="close mx-2" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </>
  )
}

Alert.propTypes = {
    alert: PropTypes.shape({
        message:PropTypes.string,
        type: PropTypes.oneOf(["","warning","success","info","danger"])
    })
}

export default Alert
