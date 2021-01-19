// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Tabs, Tab, ListGroup, Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import TopicCard from "./topicCard"
import Slide from "./slide"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SortTabs = () => {
  const tabsHTML = []
  const numOfTabs = 3

  for(var tabIndex = 0; tabIndex < numOfTabs; tabIndex++){
    var tab = data.seminarTopics[tabIndex]
    tabsHTML.push(
      <Tab
        eventKey={tab.day.toLowerCase()} title={tab.day}>
        <ListGroup variant="flush" className="ml-0">
          <div className="ml-3 mt-5">
          <h1>{tab.day}</h1>
          <p>{tab.description}</p>
          </div>
          {tab.topics.map(topic =>
            <ListGroup.Item className="m-0 pb-0">
              <b>{topic.title}</b>
              {/*{"  \xa0\xa0 " + topic.detail}*/}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Tab>
    )
  }
  return (
    <>
      <Tabs defaultActiveKey={data.seminarTopics[0].day.toLowerCase()}
           id="uncontrolled-tab-example">
           {tabsHTML}
     </Tabs>
    </>
  )
}


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
        </Col>
        <Col lg={7} className="mt-5">
          {/*<Slider {...settings}>
            {slideHTML}
          </Slider>*/}



          <SortTabs/>
        </Col>
      </Layout>
    </>
  )
}

export default SeminarSection
