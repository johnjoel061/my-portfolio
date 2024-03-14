import React from "react";
import "./home.css";
import Profile from '../../assets/IMG_20221126_090705.jpg';
import Resume from '../../assets/John Joel C. Alfabete CV.pdf';

const home = () => {
  return (
    <section class="section" id="home">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">HELLO</p>
          <h1 class="title">
            I'm{" "}
            <span>
              Joel
              <br />a
            </span>{" "}
            Full Stack Developer
          </h1>
          <p class="description">
            Welcome to my web developer portfolio! I'm Joel, a Computer Science
            student pursuing full-stack development in the Philippines, I
            immerse myself in the dynamic world of technology, combining both
            front-end and back-end development skills to create robust and
            efficient web applications. With a passion for problem-solving and
            innovation, I embrace the challenges of mastering various
            programming languages, frameworks, and tools essential for both
            client-side and server-side development.
          </p>
          <div class="action__btns">
            <a class="hire__me" href={Resume} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
            <a class="portfolio" href="#projects">
              Portfolio
            </a>
          </div>
        </div>
        <div class="image">
          <img src={Profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default home;
