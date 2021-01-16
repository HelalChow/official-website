import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import TimelineSection from "../components/timelineSection/timeline"

import 'bootstrap/dist/css/bootstrap.min.css'


const IndexPage = () => {
  return (
    <>
      <LandingSection/>
      <TimelineSection/>
    </>
  )
}

export default IndexPage
