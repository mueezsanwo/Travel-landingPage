import React from 'react';
import '../styles/footer.css';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='top'>
                <h3>Beaches</h3>
                <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaLinkedin className='icon' />
                <FaGithub className='icon' />
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <ul>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policy</li>
                        <li>Pricing</li>
                        <li>Privacy</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;