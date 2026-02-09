import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img5.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume_pdf from "../../assets/Tope_Bello_Resume.pdf";

const Hero = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault(); // Prevent the default download behavior
    const userConfirmed = window.confirm(
      "Do you want to download Tope_Bello_Resume.pdf?",
    );
    if (userConfirmed) {
      // Trigger download if user confirms
      const link = document.createElement("a");
      link.href = resume_pdf;
      link.download = "Tope_Bello_Resume.pdf";
      link.click();
    }
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Tope Bello,</span> a creative full stack developer.
      </h1>
      <p>
        I focus on building simple, reliable, and modern web and mobile
        applications that help real people and businesses work better, with
        smooth user experiences and strong systems behind the scenes.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My Resume</div> */}
        <a
          href={resume_pdf}
          download
          className="hero-resume"
          onClick={handleResumeDownload}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
