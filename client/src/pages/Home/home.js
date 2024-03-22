import React from "react";
import "./home.css";
import Profile from "../../assets/IMG_20221126_090705.jpg";
import Resume from "../../assets/John Joel C. Alfabete CV.pdf";
import { useSelector } from "react-redux";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {firstName, caption, introDescription} = intro;
  
  return (
    <section className="section" id="home">
      <div className="section__container">
        <div className="content">
          <p className="subtitle">HELLO</p>
          <h1 className="title">
            I'm{" "}
            <span>
              {firstName || " "}
              <br />a
            </span>{" "}
            {caption || " "}
          </h1>
          <p className="description">
            {introDescription || " "}
            </p>
          <div className="action__btns">
            <a
              className="hire__me"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a className="portfolio" href="#projects">
              Portfolio
            </a>
          </div>
        </div>
        <div className="image">
          <img src={Profile} alt="Profile of Joel" />
        </div>
      </div>
    </section>
  );
};

export default Home;