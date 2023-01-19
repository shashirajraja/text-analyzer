import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-light text-center text-white" >
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Youtube --> */}
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="https://www.youtube.com/@bittercode?sub_confirmation=1"
        role="button"
        ><i className="fa-brands fa-youtube"></i
      ></a>

      {/* <!-- Twitter --> */}
      {/* <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i
      ></a> */}

      {/* <!-- Google --> */}
      {/* <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i
      ></a> */}

      {/* <!-- Instagram --> */}
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="https://www.instagram.com/shashirajraja"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="https://www.linkedin.com/in/shashirajraja"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="https://github.com/shashirajraja"
        role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color:"white", fontWeight:"bold", textDecoration:"none"}}>
    © 2023 Copyright:&nbsp;
    <a className="text-white" rel="noreferrer" target="_blank" href="https://www.youtube.com/@bittercode?sub_confirmation=1">BitterCode</a>&nbsp;by&nbsp; 
    <a className="text-white" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/shashirajraja">Shashi Raj</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </>
  )
}

export default Footer
