// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import FaceCard from "./faceCard"


const OurPics = () => {
  const cardsHTML = []
  const numOfCards = 3

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    var member = data.teamMembers[cardIndex]
    cardsHTML.push(
      <FaceCard
        name={member.name}
        title={member.title}
        company={member.company}
        school={member.school}
        image={member.image}
        resume={member.resume}
        color={member.color}
      />
    )
  }

  return (
    <>
      <Row className="">
        {cardsHTML.slice(1)}
      </Row>
      <Row className="justify-content-center">
        {cardsHTML[0]}
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
          <Jumbotron section={"landing"}/>
        </Col>
        <Col lg={7} className="mt-5 align-items-center">
          <OurPics/>
        </Col>
      </Layout>
    </>
  )
}

export default LandingSection
