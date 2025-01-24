import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur veniam veritatis maxime facere laborum dolorum voluptatibus cupiditate totam architecto.</p>  
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque pariatur dolores ipsa voluptatum sed doloremque ut vero expedita nobis libero!</p>
                </div>
                <div className="about-skills"></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>NODE JS</p><hr style={{width:"50%"}}/></div>
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