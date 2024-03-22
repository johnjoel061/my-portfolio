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
  const {about} = portfolioData;
  const {aboutDescription, caption, introDescription} = about;


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
              <p>
                {aboutDescription || " "}
              </p>
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
                  <li>
                    <span>Web Development</span>
                    <br />
                    Web app development that is decentralized
                  </li>
                  <li>
                    <span>App Development</span>
                    <br />
                    Building Android/iOS decentralized apps
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
                  <li>
                    <span>2021 - Current</span>
                    <br />A Blockchain Senior Engineer at Solana
                  </li>
                  <li>
                    <span>2019 - 2021</span>
                    <br />
                    Team lead at Starapp LLC.
                  </li>
                  <li>
                    <span>2016 - 2017</span>
                    <br />
                    Internship at Ethereum Blockchain
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>2023</span>
                    <br />
                    Graduated from DEBESMSCAT with a Bachelor's degree in
                    Computer Science
                  </li>
                  <li>
                    <span>2016</span>
                    <br />
                    Graduated from Osmena Colleges Senior High School
                  </li>
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
            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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

            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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

            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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

            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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

            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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

            <div class="card">
              <h3 class="card__title">Title</h3>
              <p class="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
              <div class="card__date">April 15, 2022</div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
