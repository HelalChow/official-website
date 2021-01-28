import React from "react"
import { Container, Col, Row, Card, Image } from 'react-bootstrap'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../assets/data"


const CustomCard = styled(Card)`
  border: none;
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
  background-color: #f8f8ff;
`
const BetterImage = styled(Image)`
  max-width: 3rem;
`

const CardHeading = styled.h4`
  font-size: 1.15rem;
  font-weight: 900;
`


const TestimonialCard = (props) => {
  return (
    <>
      <Col lg={{ span: 12, offset:0 }}>
        <CustomCard className="my-4 mx-2 p-4 shadow-none ">
          <Card.Body className="p-0">
            <Row>
              <Col lg={12} className="d-flex align-items-center justify-content-center">
              <span class="">
                "{props.message}"

              </span>
              </Col>
              <Col lg={12} className=" pt-2 d-flex align-items-center justify-content-center">
                  <b>- {props.name}</b>
                  <BetterImage className="ml-3" src={require(`../../assets/testimonials/${props.image}`)} roundedCircle />
              </Col>
            </Row>
          </Card.Body>
        </CustomCard>
      </Col>
    </>
  )
}

export default TestimonialCard
