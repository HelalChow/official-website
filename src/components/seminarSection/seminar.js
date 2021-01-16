// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import TopicCard from "./topicCard"
import Slide from "./slide"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../../node_modules/slick-carousel/slick/slick.css'
// import '../../../node_modules/slick-carousel/slick/slick-theme.css'






const SeminarSection = () => {
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
  const numOfSlides = 3

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
          download sy pdf here
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

export default SeminarSection
