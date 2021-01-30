// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Carousel, Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import ImageCard from "./imageCard"
import Slide from "./slide"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const ThreeThings = () => {
  const cardsHTML = []
  const numOfCards = data.aboutUs.threeThings.length

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    var question = data.aboutUs.threeThings[cardIndex]
    cardsHTML.push(
      <Col lg={12} className="mb-3">
        <h1>{question.title}</h1>
        <p>{question.description}</p>
      </Col>
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

const ImageSlides = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // speed in mili-seconds
    fade: true
  }


  const slideHTML = []
  const numOfSlides = 4

  for (var slideIndex = 0; slideIndex < numOfSlides; slideIndex++){
    slideHTML.push(
      <ImageCard
      />
    )
  }

  return (
    <>
      <Row>
      <Slider {...settings}>
        {slideHTML}
      </Slider>
      </Row>
    </>
  )
}


const AboutSection = () => {
  return (
    <>
      <Layout>
        <Navigation/>
        <Col lg={12} className="mt-5 d-flex align-items-center">
          <div>
            <BiggerH1 className="catchPhrase">About</BiggerH1>
          </div>
        </Col>
        <Col lg={8} className="mt-5 ">
          {/*<ImageSlides/>*/}
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={require("../../assets/nyu.jpg")}
              alt="First slide helal"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={require("../../assets/estee.jpg")}
              alt="First slide helal"
            />
            <Carousel.Caption>
              {/*<h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={7} className="mt-5 align-items-center">
          <ThreeThings/>
        </Col>
      </Layout>
    </>
  )
}

export default AboutSection
