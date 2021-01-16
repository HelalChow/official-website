import React from "react"
import { Container, Col, Row, Carousel, Card } from 'react-bootstrap'
import styled from "styled-components"
import TopicCard from "./topicCard"

{/*CSS for Bootstrap Card*/}
const CustomCard = styled(Card)`
  border: none;
  transition: transform 1s ease;
  &:hover {
    transform: scale(.9);
  }
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
  const numOfCards = 6

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    cardsHTML.push(
      <TopicCard
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
        <h1 className="text-center">Friday's Topics</h1>
        <p className="text-center">Planning the interview (free)</p>
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
