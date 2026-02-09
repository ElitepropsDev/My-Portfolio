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
  <p>
    I build simple, reliable websites and mobile apps that help people and businesses get things done online. 
    I focus on making digital products easy to use, fast, and practical — even for non-tech users.
  </p>
  <p>
    Beyond building, I also enjoy teaching and guiding beginners, breaking down tech concepts into clear, 
    everyday language. Whether I’m developing or tutoring, my goal is always the same: make technology easy to understand and useful.
  </p>
</div>

                <div className="about-skills"></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>REACT  NATIVE</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>EXPRES JS</p><hr style={{width:"55%"}}/></div>
                {/* <div className="about-skill"><p>PHP</p><hr style={{width:"65%"}}/></div> */}
                <div className="about-skill"><p>NODE JS</p><hr style={{width:"55%"}}/></div>
                <div className="about-skill"><p>MONGO DB</p><hr style={{width:"55%"}}/></div>
                
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>5+</h1>
                <p>YEARS OF EXPERINCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>25+</h1>
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