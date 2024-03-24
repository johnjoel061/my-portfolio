import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import "./about.css";
import HTMLImage from "../../assets/html-5.png";
import CSSImage from "../../assets/css-3.png";
import JavaScriptImage from "../../assets/js.png";
import PythonImage from "../../assets/python.png";
import ReactJSImage from "../../assets/physics.png";
import AboutImage from "../../assets/about.jpg";
import { useSelector } from "react-redux";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skill } = portfolioData;
  const { experience } = portfolioData;
  const { education } = portfolioData;
  const { certification } = portfolioData;

  const { aboutDescription, aboutImage, techStack } = about;
  const { skillTitle, skillDescription } = skill;
  const { experienceYear, experienceDescription } = experience;
  const { educationYear, educationDescription } = education;
  // const {
  //   certificationTitle,
  //   certificationDescription,
  //   certificationDate,
  //   certificationLink,
  // } = certification;

  return (
    <section className="about-section" id="about">
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={AboutImage} alt="" />
            </div>

            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>{aboutDescription || " "}</p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("education")}
                >
                  Education
                </p>
              </div>

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>UI/UX</span>
                    <br />
                    Designing decentralized interfaces
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  {experience.map((exp, index) => (
                    <li key={index}>
                      <span>{exp.experienceYear}</span>
                      <br />
                      {exp.experienceDescription}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  {education.map((educ, index) => (
                    <li key={index}>
                      <span>{educ.educationYear}</span>
                      <br />
                      {educ.educationDescription}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h1 className="sub-title">Tech Stack</h1>

                <div className="techStack-container">
                  <div className="techStack-content">
                    <img src={HTMLImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={CSSImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={JavaScriptImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={CSSImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={JavaScriptImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={PythonImage} alt="" />
                  </div>

                  <div className="techStack-content">
                    <img src={ReactJSImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionTitle title="Certifications" />
          <div className="certification-container">
            {certification.map((cert, index) => (
              <div class="card" key={index}>
                <h3 class="card__title">{cert.certificationTitle}</h3>
                <p class="card__content">{cert.certificationDescription}</p>
                <div class="card__date">{cert.certificationDate}</div>
                <div class="card__arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="15"
                    width="15"
                  >
                    <path
                      fill="#fff"
                      d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
