const router = require("express").Router();

const {
  Intro,
  About,
  Skills,
  Experience,
  Education,
  Certification,
  Portfolio,
  Services,
  Social,
  Contact,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.findOne();
    const abouts = await About.findOne();
    const skills = await Skills.find();
    const experiences = await Experience.find();
    const educations = await Education.find();
    const certifications = await Certification.find();
    const portfolios = await Portfolio.find();
    const services = await Services.find();
    const socials = await Social.find();
    const contacts = await Contact.find();

    res.status(200).json({
      intro: intros ? intros : {}, // Handle null intro
      about: abouts ? abouts : {}, // Handle null about
      skill: skills,
      experience: experiences,
      education: educations,
      certification: certifications,
      portfolio: portfolios,
      service: services,
      social: socials,
      contact: contacts,
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;