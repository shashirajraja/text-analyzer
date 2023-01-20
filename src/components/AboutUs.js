import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

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