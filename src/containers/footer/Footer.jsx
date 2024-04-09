import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const  Footer = () => {
  return (
    <div className='gpt3_footer section__padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others </h1>
      </div>

      <div className='gpt3_footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3_footer-links">
        <div className='gpt3_footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Max-Bot Jp08 PJ Nechelin, All Right Reserved</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Get in touch</h4>
          <p>Max-Bot jp08 PJ Nechelin</p>
          <p>+234 810-0752-800</p>
          <p>info@reachout.net</p>
        </div>
      </div>
      <div className='gpt3_footer-copyright'>
        <p>@ 2023 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;