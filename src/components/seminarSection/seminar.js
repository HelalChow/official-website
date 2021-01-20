// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Card, Tabs, Tab, ListGroup, Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********

const WavyImg = styled.img`
   position: absolute;
   left: 0;
    z-index: -1
`
const CustomCard = styled(Card)`
  border: none;
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
`

const SortTabs = (props) => {
  const tabsHTML = []
  const numOfTabs = 3

  for(var tabIndex = 0; tabIndex < numOfTabs; tabIndex++){
    var tab = data.seminarTopics[tabIndex]
    tabsHTML.push(
      <Tab
        eventKey={tab.day.toLowerCase()} title={tab.day}>
        <ListGroup variant="flush" className="ml-0">
          <div className="ml-3 my-4">
          <h1>{tab.day}</h1>
          <p>{tab.description}</p>
          </div>
          {tab.topics.map(topic =>
            <ListGroup.Item className="m-0 p-3">
              <b>{topic.title}</b><br/>
              {"  \xa0\xa0 " + topic.detail}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Tab>
    )
  }

  return (
    <>
      <CustomCard className="my-4 mx-2 p-4 shadow-none ">
      <Tabs defaultActiveKey={data.seminarTopics[0].day.toLowerCase()}
           id="uncontrolled-tab-example"
           className="myClass"
      >
           {tabsHTML}
     </Tabs>
     </CustomCard>
    </>
  )
}


const SeminarSection = (props) => {

  return (
    <>
      <Layout>
        <Col lg={5} className="mt-5 d-flex align-items-center">
          <Jumbotron section={"seminar"}/>
        </Col>
        {/*<Col lg={1}> </Col>*/}
        <Col lg={7} className="mt-5">
          <SortTabs/>
        </Col>
        <WavyImg src={require('./blob.svg')}/>
      </Layout>
    </>
  )
}

export default SeminarSection
