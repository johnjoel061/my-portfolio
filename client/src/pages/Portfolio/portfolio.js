import React from "react";
import "./portfolio.css";
import Profile from "../../assets/IMG_20221126_090705.jpg";

const portfolio = () => {
  return (
    <section class="project-section" id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="portfolio-title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">

          <div class="details-container color-container">
            <div class="article-container">
              <img src={Profile} alt="Project 2" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Two dfgd fgdgd</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Source Code
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img src={Profile} alt="Project 3" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Source Code
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img src={Profile} alt="Project 2" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Two dfgd fgdgd</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Source Code
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img src={Profile} alt="Project 3" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Source Code
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default portfolio;
