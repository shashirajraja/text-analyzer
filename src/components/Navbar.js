import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
function Navbar() {
  
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
        <div className='container text-white'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold">
                    <Link to="/" className="nav-item nav-link mx-2 navBtn text-white">Home</Link>
                    <Link to="/about" className="nav-item nav-link mx-2 navBtn text-white">About Us</Link>
                </div>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input bg-dark" data-onstyle="info" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
        </div>
     </nav>
    </>
  )
}

export default Navbar