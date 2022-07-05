import React from 'react'
import './Footer.css'
import twitter from "../../assets/twitter.png";
import In from "../../assets/in.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Footer = ({onClick}) => {
  return (
    <>
      <div className='container-fluid footer'>
        {/* <div>
          <h3 className='dream'>DREAM POTENTIAL</h3>
          <a href="mailto:hello@dreampotential.org" className='mobile_email'>hello@dreampotential.org</a>
        </div> */}
        {/* <a href="mailto:hello@dreampotential.org" className='email'>hello@dreampotential.org</a> */}
        <div>
          <h3 className='follow'>Follow us on</h3>
       
          <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
          <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
          <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
          <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
      
        </div>
      </div>
    </>
  )
}

export default Footer