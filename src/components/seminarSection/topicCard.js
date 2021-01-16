import React from "react"
import { Container, Col, Row, Card, Image } from 'react-bootstrap'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFilter,
  faSearch,
  faLaptop,
  faTools,
  faCamera,
  faUsers,
  faCircle

} from "@fortawesome/free-solid-svg-icons";

const CustomCard = styled(Card)`
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
  /* max-width:10rem; */
`
const BetterImage = styled(Card.Img)`
  max-width: 8rem;
`

const CardHeading = styled.h4`
  font-size: 1.15rem;
  font-weight: 900;
`


const TopicCard = (props) => {
  return (
    <>
      <Col lg={{ span: 6, offset:0 }}>
        <CustomCard className="p-4 my-4 mx-2 shadow-reg ">
          <Card.Body className="p-0">
            <Row>
              <Col lg={4} className="">
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" color={"#BF6B1A"} />
                  <FontAwesomeIcon icon={faSearch} className="fa-stack-1x"inverse  />
                </span>
              </Col>
              <Col lg={8}>
                <CardHeading className="">{"Targeted Advertisement"}</CardHeading>
              </Col>
              <Col lg={12} className="mt-3 text-center">
                <Card.Text>
                  {"Achieve the highest ROI by reaching audiences most i social media targeted ads "}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </CustomCard>
      </Col>
    </>
  )
}

export default TopicCard
