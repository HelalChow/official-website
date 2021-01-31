import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import TimelineSection from "../components/timelineSection/timeline"
import SeminarSection from "../components/seminarSection/seminar"
import TestimonialsSection from "../components/testimonialsSection/testimonials"
import Footer from "../components/footerSection/footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/css/style.css"

const IndexPage = () => {
  return (
    <>
      <LandingSection/>
      <TimelineSection/>
      <SeminarSection/>
      <TestimonialsSection/>
      <Footer/>
    </>
  )
}

export default IndexPage
