import React, { useState } from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Spinner from './common/Spinner';

function AboutUs(props) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
        <Navbar mode={props.mode} toggleMode={props.toggleMode}/>
        <Spinner isLoading={isLoading}/>
        <iframe src="https://flowcv.me/shashirajraja" title="About the Developer" style={{width:"100%", height:"750px",border:"none",overflow:"hidden"}} onLoad={()=>setIsLoading(false)}></iframe>
        <Footer mode={props.mode}/>
    </>
  )
}

export default AboutUs