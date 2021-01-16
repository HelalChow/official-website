import React from "react"
import { Link } from "gatsby"
import Layout from "../layout"
import Navigation from "../nav"
import data from "../../assets/data"
import { Container, Col, Row, Nav, Navbar, Button } from "react-bootstrap"
import styled from "styled-components"
import FaceCard from "./faceCard.js"

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const Jumbotron = () => (
  <div>
    <BiggerH1>
      Your home exactly how you want it
    </BiggerH1>
    <div className="pt-3">
    We understand the value of quality end products that will last generations and will be loved by all members of the community alike.
    </div>
  </div>
)

const OurPics = () => {
  const cardsHTML = []
  const numOfCards = 3

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    cardsHTML.push(
      <FaceCard
      />
    )
  }

  return (
    <>
    <Row className="justify-content-center">
      {cardsHTML[0]}
    </Row>
    <Row>
      {cardsHTML.slice(1)}
    </Row>
    </>
  )
}



const LandingSection = () => {
  return (
    <>
      <Layout>
        <Navigation/>
        <Col lg={5} className="mt-5 d-flex align-items-center">
          <Jumbotron/>
        </Col>
        <Col lg={7} className="mt-5">
          <OurPics/>
        </Col>
      </Layout>
    </>
  )
}

export default LandingSection
