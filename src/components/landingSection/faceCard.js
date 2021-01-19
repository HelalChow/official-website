import React from "react"
import { Container, Col, Row, Card, Image } from 'react-bootstrap'
import styled from "styled-components"
import data from "../../assets/data"

const CustomCard = styled(Card)`
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
  max-width:18rem;
`
const BetterImage = styled(Card.Img)`
  max-width: 8rem;
`

const ColoredAnchor = styled.a`
  color: ${props => data.color[props.color]};
`

const FaceCard = (props) => {
  return (
    <>
      <Col lg={{ span: 6, offset:0 }} className="d-flex align-items-center justify-content-center">
        <CustomCard className="py-4 my-4 mx-2 shadow-lg ">
          <Card.Body className="p-0">
            <Row>
              <Col lg={12} className="d-flex align-items-center justify-content-center">
                  <BetterImage src={require(`../../assets/team/${props.image}`)} roundedCircle/>
              </Col>
              <Col lg={12} className="mt-3 text-center">
                <Card.Title className="m-0">{props.name}</Card.Title>
                <Card.Text className="mt-2">
                  {props.title}
                  <br/>{props.company}, {props.school}
                  <br/>
                  <ColoredAnchor
                    color={props.color}
                    href={require(`../../assets/${props.resume}`)}
                    >Resume
                  </ColoredAnchor>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </CustomCard>
      </Col>
    </>
  )
}

export default FaceCard
