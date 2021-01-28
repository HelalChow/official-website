// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import TestimonialCard from "./testimonialCard.js"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const TestimonialsSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  //  autoplay: true,
    autoplaySpeed: 6000 // speed in mili-seconds
    // fade: true
  }


  const slideHTML = []
  const numOfSlides = data.testimonials.length

  for (var slideIndex = 0; slideIndex < numOfSlides; slideIndex++){
    var testimonial = data.testimonials[slideIndex]

    slideHTML.push(
      <TestimonialCard
        name = {testimonial.name}
        deet1 = {testimonial.detail1}
        deet2 = {testimonial.detail2}
        image = {testimonial.pic}
        message = {testimonial.message}
      />
    )
  }
  return (
    <>
      <Layout>
        <Col lg={5} className="mt-5 d-flex align-items-center">
          <Jumbotron section={"testimonial"}/>
        </Col>
        <Col lg={7} className="mt-5">
          <Slider {...settings}>
            {slideHTML}
          </Slider>
        </Col>
      </Layout>
    </>
  )
}

export default TestimonialsSection
