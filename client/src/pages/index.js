import React from "react";
import Header from "./Header/header";
import HomeSection from "./Home/home";
import About from "./About/about";
import Services from "./Services/services";
import Portfolio from "./Portfolio/portfolio";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <About />
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
