import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import Footer from "../components/footerSection/footer"
import FaqSection from"../components/faq"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/css/style.css"

const FaqPage = () => {
  return (
    <>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default FaqPage
