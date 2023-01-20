import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import Logo from '../logo512.png';  //  src/images

function Navbar() {
  
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
        <div className='container text-white'>
            <a href="https://www.youtube.com/@bittercode?sub_confirmation=1" className="navbar-brand d-none d-md-block d-sm-none" rel="noreferrer" target={"_blank"}>
                <img src={Logo} alt="BitterCode" width="50" height="44" style={{marginTop:"-10px", marginBottom:"-10px"}} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold">
                    <Link to="/" className="nav-item nav-link mx-2 navBtn text-white">Home</Link>
                    <Link to="/about" className="nav-item nav-link mx-2 navBtn text-white">About Us</Link>
                    <Link to="/privacy" className="nav-item nav-link mx-2 navBtn text-white">Privacy Policy</Link>
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