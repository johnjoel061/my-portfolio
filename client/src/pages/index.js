import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/header";
import HomeSection from "./Home/home";
import About from "./About/about";
import Services from "./Services/services";
import Portfolio from "./Portfolio/portfolio";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (
        <div>
          <HomeSection />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
