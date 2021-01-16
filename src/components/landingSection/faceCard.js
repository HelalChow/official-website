import React from "react"
import { Container, Col, Row, Card, Image } from 'react-bootstrap'
import styled from "styled-components"

const CustomCard = styled(Card)`
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
`
const BetterImage = styled(Card.Img)`
  max-width: 8rem;
`

const FaceCard = (props) => {
  return (
    <>
      <Col lg={{ span: 6, offset:0 }}>
        <CustomCard className="p-5 my-4 mx-2 shadow-lg ">
          <Card.Body className="p-0">
            <Row>
              <Col lg={12} className="d-flex align-items-center justify-content-center">
                  <BetterImage src={require(`../../assets/tx-nature.png`)} roundedCircle/>
              </Col>
              <Col lg={12} className="mt-3 text-center">
                <Card.Title>Yasin Ehsan</Card.Title>
                <Card.Text>
                  software engineer
                  <br/>capital One, AI/ML Team
                  <br/>QC '20, Resume
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
