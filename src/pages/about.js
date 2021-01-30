import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import Footer from "../components/footerSection/footer"
import AboutSection from"../components/about"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/css/style.css"

const AboutPage = () => {
  return (
    <>
      <AboutSection/>
      <Footer/>
    </>
  )
}

export default AboutPage
