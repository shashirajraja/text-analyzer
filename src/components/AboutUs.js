import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

function AboutUs(props) {
  return (
    <>
        <Navbar mode={props.mode} toggleMode={props.toggleMode}/>
        <iframe src="https://flowcv.me/shashirajraja" title="About the Developer" style={{width:"100%", height:"400px"}}></iframe>
        <Footer mode={props.mode}/>
    </>
  )
}

export default AboutUs