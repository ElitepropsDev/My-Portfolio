import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

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
            <p className="work-stack">
              <strong>Stacks:</strong> {work.w_stack}
            </p>
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

      {/* Scroll Hint for Mobile */}
      <div className="scroll-hint">Swipe sideways to see more projects 👈👉</div>
    </div>
  );
};

export default MyWork;
