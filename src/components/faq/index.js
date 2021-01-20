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
  const numOfCards = data.faqs.questions.length

  for(var cardIndex = 0; cardIndex < numOfCards; cardIndex++){
    var member = data.faqs.questions[cardIndex]
    cardsHTML.push(

      <p className="mt-3">
        <b>{member.q}</b>
        <br/>{member.a}
      </p>
    )
  }
  return (
    <>
      <h3>Top 3 Concerns</h3>
      {cardsHTML}
    </>
  )
}

const FaqTable = () => {
  const headingsHTML = []
  const numOfheadings = data.faqs.tableHeading.length

  for(var cardIndex = 0; cardIndex < numOfheadings; cardIndex++){
    var member = data.faqs.tableHeading[cardIndex]
    headingsHTML.push(

      <th>{member}</th>
    )
  }
  return (
    <>
      <h3>Find an oppurtunity in each situation</h3>

      <Table responsive striped bordered hover>
        <thead>
        {/*<tr>
          <td></td>
          <td colSpan="6">Larry the Bird</td>
        </tr>*/}
          <tr>
            <th></th>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <th key={index}>{data.faqs.tableHeading[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Freshmen</b></td>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <td key={index}>
              </td>
            ))}
          </tr>
          <tr>
            <td><b>Sophomore</b></td>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td><b>Junior</b></td>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td><b>Senoir</b></td>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td><b>Alum</b></td>
            {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
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
        <Col lg={12} className="mt-5 ">
          <QuestionSet/>
        </Col>
        <Col lg={12} className="mt-5 ">
          <FaqTable/>
        </Col>
        <Col lg={6} className="mt-5 align-items-center">



        </Col>
      </Layout>
    </>
  )
}

export default FaqSection
