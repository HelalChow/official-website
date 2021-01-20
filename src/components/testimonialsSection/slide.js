import React from "react"
import { Container, Col, Row, Carousel, Card } from 'react-bootstrap'
import styled from "styled-components"
import TestimonialCard from "./testimonialCard"

{/*CSS for Bootstrap Card*/}
const CustomCard = styled(Card)`
  border: none;
  transition: transform 1s ease;
  /* &:hover {
    transform: scale(.9);
  } */
  border:none !important;
`

{/*CSS for card heading i.e 'Website and Analytics'*/}
const SubHeading = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
  margin: 0;
`

const OurPics = () => {
  const cardsHTML = []
  const numOfCards = 3

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    cardsHTML.push(
      <TestimonialCard
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

{/*Component*/}
const Slide = (props) => {
  return (
    <>
      <CustomCard>
        {/*<Card.Img src={require(`../assets/illustrations/${props.image.toLowerCase()}`)}>
        </Card.Img>
        <Card.Body className="text-center">
          <SubHeading>{props.heading}</SubHeading>
          <span class="">
            {props.description}
          </span>
        </Card.Body>*/}
        <OurPics/>
      </CustomCard>
    </>
  )
}

export default Slide
