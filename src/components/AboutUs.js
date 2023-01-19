import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AboutUs() {
  return (
    <>
        <Navbar/>
        <iframe src="https://flowcv.me/shashirajraja" title="About the Developer" style={{width:"100%", height:"400px"}}></iframe>
        <Footer/>
    </>
  )
}

export default AboutUs