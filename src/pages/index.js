import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import TimelineSection from "../components/timelineSection/timeline"
import StrategySection from "../components/strategySection/strategy"
import SeminarSection from "../components/seminarSection/seminar"
import TestimonialsSection from "../components/testimonialsSection/testimonials"
import Footer from "../components/footerSection/footer"

import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => {
  return (
    <>
      <LandingSection/>
      <TimelineSection/>
      {/*<StrategySection/>*/}
      <SeminarSection/>
      <TestimonialsSection/>
      <Footer/>
    </>
  )
}

export default IndexPage
