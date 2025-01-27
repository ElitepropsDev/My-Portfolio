import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo3.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" className='footer-logo'/>
                <p> I focus on writing clean, maintainable code and creating intuitive designs.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscibe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'> © 2025, Tope Bello. All rigths reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer