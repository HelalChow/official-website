import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import TimelineSection from "../components/timelineSection/timeline"
import StrategySection from "../components/strategySection/strategy"
import SeminarSection from "../components/seminarSection/seminar"

import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => {
  return (
    <>
      <LandingSection/>
      <TimelineSection/>
      {/*<StrategySection/>*/}
      <SeminarSection/>
    </>
  )
}

export default IndexPage
