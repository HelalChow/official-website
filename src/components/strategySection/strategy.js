// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import YearCard from "./yearCard.js"



const OurPics = () => {
  const cardsHTML = []
  const numOfCards = 4

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    cardsHTML.push(
      <YearCard
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



const StrategySection = () => {
  return (
    <>
      <Layout>
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

export default StrategySection
