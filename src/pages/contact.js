import React from "react"
import { Link } from "gatsby"
import LandingSection from "../components/landingSection/landing"
import Footer from "../components/footerSection/footer"
import ContactSection from"../components/contact"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/css/style.css"

const ContactPage = () => {
  return (
    <>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactPage
