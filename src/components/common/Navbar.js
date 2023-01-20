import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../logo512.png';  //  src/images
import PropTypes from 'prop-types'

function Navbar(props) {
    const {mode} = props
    return (
    <>
     <nav className={"navbar navbar-expand-lg " + (mode === "light" ? "bg-primary navbar-light" : "bg-dark navbar-dark")} >
        <div className={"container " + (mode === "light" ? "text-white" : "text-white") }>
            <a href="https://www.youtube.com/@bittercode?sub_confirmation=1" className="navbar-brand d-none d-md-block d-sm-none" rel="noreferrer" target={"_blank"}>
                <img src={Logo} alt="BitterCode" width="50" height="44" style={{marginTop:"-10px", marginBottom:"-10px"}} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold">
                    <Link to="/" className="nav-item nav-link mx-2 navBtn text-white">Home</Link>
                    <Link to="/privacy" className="nav-item nav-link mx-2 navBtn text-white">Privacy Policy</Link>
                    <Link to="/about" className="nav-item nav-link mx-2 navBtn text-white">About Us</Link>
                </div>
            </div>
            <div className="form-check form-switch" >
                <input className="form-check-input" data-onstyle="info" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
        </div>
     </nav>
    </>
  )
}

Navbar.propTypes = {
    mode:PropTypes.oneOf(["light", "dark"])
}

Navbar.defaultProps = {
    mode : "light"
}

export default Navbar