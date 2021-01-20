// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import TestimonialCard from "./testimonialCard.js"
import Slide from "./slide"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OurPics = () => {
  const cardsHTML = []
  const numOfCards = 4

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    cardsHTML.push(
      <TestimonialCard
      />
    )
  }

  return (
    <>
      <Row>
        {cardsHTML}
      </Row>
    </>
  )
}



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
  const numOfSlides = 6

  for (var slideIndex = 0; slideIndex < numOfSlides; slideIndex++){
    slideHTML.push(
      <Slide
      />
    )
  }
  return (
    <>
      <Layout>
        <Col lg={5} className="mt-5 d-flex align-items-center">
          <Jumbotron/>
        </Col>
        <Col lg={1} className="mt-5 d-flex align-items-center">

        </Col>
        <Col lg={6} className="mt-5">
          {/*<OurPics/>*/}
          <Slider {...settings}>
            {slideHTML}
          </Slider>
        </Col>
      </Layout>
    </>
  )
}

export default TestimonialsSection
