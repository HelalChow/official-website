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
            items={data.timeline}
            mode="VERTICAL_ALTERNATING"
            hideControls
            onScrollEnd
            cardHeight={100}
            theme={{primary: "#1681a8", secondary: "white", cardBgColor: "white", cardForeColor: "black" }}
            slideShow={true}
            slideItemDuration={100}
          >

          <div>
         <div style={{ width: "250px", height: "250px" }}>
           <img
             style={{ maxWidth: "100%", maxHeight: "100%" }}
             alt="test"
             src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
           />
         </div>
       </div>
          </Chrono>
        </Col>
      </Layout>
    </>
  )
}

export default TimelineSection
