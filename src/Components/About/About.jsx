import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div id='about' className="about-right">
                <div className="about-para">
                  <p>With expertise in both front-end and back-end development, I focus on delivering efficient and user-centric solutions. Every project I take on is an opportunity to bring ideas to life and make technology work smarter.</p>  
                  <p> I thrive on solving complex problems with clean, efficient code and staying updated on emerging technologies. My goal is to bridge the gap between functionality and design to create impactful digital solutions.</p>
                </div>
                <div className="about-skills"></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>NODE JS</p><hr style={{width:"55%"}}/></div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>10+</h1>
                <p>YEARS OF EXPERINCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About