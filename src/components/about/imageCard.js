import React from "react"
import { Button, Container, Col, Row, Card, Image } from 'react-bootstrap'
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


const ImageCard = (props) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
    </>
  )
}

export default ImageCard
