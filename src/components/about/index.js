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

const BiggerH3 = styled.h3`
  /* color: black; */
  text-shadow: 0 1px 0 black;
`

const ShadedImg = styled.img`
  /* opacity: .5; */
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
`

const ThreeThings = () => {
  const cardsHTML = []
  const numOfCards = data.aboutUs.threeThings.length

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    var question = data.aboutUs.threeThings[cardIndex]
    cardsHTML.push(
      <Col lg={12} className="mb-3">
        <h3>{question.title}</h3>
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
  return (
    <>
      <Carousel>
        {data.aboutUs.slideShow.map(image =>
          <Carousel.Item interval={1000}>
            <ShadedImg
              className="d-block w-100"
              src={require(`../../assets/team/group/${image.path}`)}
              alt={image.title}
            />
            <Carousel.Caption>
              <BiggerH3>{image.title}</BiggerH3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
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
          <ImageSlides/>
        </Col>
        <Col lg={7} className="mt-5 align-items-center">
          <ThreeThings/>
        </Col>
      </Layout>
    </>
  )
}

export default AboutSection
