import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={work.w_name} />
            <h2>{work.w_name}</h2>
            <p className="work-desc">{work.w_desc}</p>
            <p className="work-stack">{work.w_stack}</p>
            <div className="work-links">
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              {work.w_github && (
                <a
                  href={work.w_github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ HINT goes here, below the container */}
      <div className="scroll-hint">
        <span>← Swipe to explore →</span>
      </div>
    </div>
  );
};

export default MyWork;
