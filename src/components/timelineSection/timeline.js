// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import { Chrono } from "react-chrono";


const TimelineSection = () => {

  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "wdhcdgcjhdjhcg djhgcjhdgjchgjhsdg hjcshghsdchgsd usgjvysgjhkdgshjgsdjhgjdhgjsdg"
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",

    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",

    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",

    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",

    },

    ];

  return (
    <>
      <Layout>


        <Col lg={5} className="mt-5 d-flex align-items-center">
          <Jumbotron/>
        </Col>
        <Col lg={7} className="mt-5">
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls
            onScrollEnd
            cardHeight={100}
            theme={{primary: "red", secondary: "blue", cardBgColor: "white", cardForeColor: "black" }}
            slideShow={true}
            slideItemDuration={100}
          >
          </Chrono>
        </Col>
      </Layout>
    </>
  )
}

export default TimelineSection
