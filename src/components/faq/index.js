// ****** DEFAULT IMPORTS BEGIN ********
import React, {useState} from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Toast, Table, Accordion, Button, Card, Carousel, Col, Row } from "react-bootstrap"
import { StyledButton, Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const QuestionSet = () => {
  const cardsHTML = []
  const numOfCards = data.faqs.byType.length

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    var type = data.faqs.byType[cardIndex]
    cardsHTML.push(

      <Col lg={6} className="mt-5 ">
        <h3>{type.heading}</h3>
        {/*<Accordion defaultActiveKey="0">*/}
        <Accordion>
          {
            Array.from({ length: type.questions.length }).map((_, index) => {
              var question = type.questions[index]
              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                      {question.q}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{question.a}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })
          }
        </Accordion>
      </Col>
    )
  }
  return (
    <>
      {cardsHTML}
    </>
  )
}

const notify = (props) => toast( `${props} dvjh`,{autoclose: 10000});

const FaqSection = () => {
  return (
    <>
      <Layout>
        <Navigation/>
        <Col lg={12} className="mt-5 d-flex align-items-center">
          <div>
            <BiggerH1 className="catchPhrase">FAQs</BiggerH1>
          </div>
        </Col>
        <QuestionSet/>
      </Layout>
    </>
  )
}

export default FaqSection
