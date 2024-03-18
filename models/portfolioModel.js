const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    introImage : {
        type: String,
        required: true
    },

    firstName : {
        type: String,
        required: true
    },

    caption : {
        type: String,
        required: true
    },

    introDescription : {
        type: String,
        required: true
    },
})


//===========ABOUT SCHEMA===============//
const aboutSchema = new mongoose.Schema({
    aboutDescription : {
        type: String,
        required: true
    },

    aboutImage : {
        type: String,
        required: true
    },

    techStack :{
        type: String,
        required: true
    }
})

const skillsSchema = new mongoose.Schema({
    skillTitle : {
        type: String,
        required: true,
    },
    
    skillDescription : {
        type: String,
        required: true,
    }
})

const experienceSchema = new mongoose.Schema({
    experienceYear : {
        type: String,
        required: true,
    },
    
    experienceDescription : {
        type: String,
        required: true,
    }
})

const educationSchema = new mongoose.Schema({
    educationYear : {
        type: String,
        required: true,
    },
    
    educationDescription : {
        type: String,
        required: true,
    }
})

const certificationSchema = new mongoose.Schema({
    certificationTitle : {
        type: String,
        required: true,
    },

    certificationDescription : {
        type: String,
        required: true
    },

    certificationDate : {
        type: String,
        required: true
    },

    certificationLink :{
        type: String,
        required: true
    }
})


//===========PORTFOLIO SCHEMA===============//
const portfolioSchema = new mongoose.Schema({
    projectTitle : {
        type: String,
        required: true
    },

    projectImage : {
        type: String,
        required: true
    },

    sourceCodeLink :{
        type: String,
        required: true
    },

    liveDemoLink :{
        type: String,
        required: true
    }
})


//===========SERVICES SCHEMA===============//
const serviceSchema = new mongoose.Schema({
    serviceIcon : {
        type: String,
        required: true
    },

    serviceTitle : {
        type: String,
        required: true
    },

    serviceDescription : {
        type: String,
        required: true
    },

    serviceLink : {
        type: String,
        required: true
    },

})


//===========CONTACT SCHEMA===============//
const contactSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },


    phoneNumber : {
        type: String,
        required: true
    },

})

const socialSchema = new mongoose.Schema({
    contactIcon : {
        type: String,
        required: true
    },

    contactIconLink : {
        type: String,
        required: true
    },
})

module.exports = {
    Intro : mongoose.model("intros", introSchema),
    About : mongoose.model("abouts", aboutSchema),
    Skills : mongoose.model("skills", skillsSchema),
    Experience : mongoose.model("experiences", experienceSchema),
    Education : mongoose.model("educations", educationSchema),
    Certification : mongoose.model("certifications", certificationSchema),
    Portfolio : mongoose.model("portfolios", portfolioSchema),
    Services : mongoose.model("services", serviceSchema),
    Social : mongoose.model("socials", socialSchema),
    Contact : mongoose.model("contacts", contactSchema)
}