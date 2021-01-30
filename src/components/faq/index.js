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
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Cliddck me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        {/*{Array.from({ length: type.questions. }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}*/}
        {/*{type.questions.map(question =>
          <p className="mt-3">
            <b>{question.q}</b>
            <br/>{question.a}
          </p>
        )}*/}
      </Col>
    )
  }
  return (
    <>
      {cardsHTML}
    </>
  )
}

// const FaqTable = () => {
//   const headingsHTML = []
//   const numOfheadings = data.faqs.tableHeading.length
//
//   for(var cardIndex = 0; cardIndex < numOfheadings; cardIndex++){
//     var member = data.faqs.tableHeading[cardIndex]
//     headingsHTML.push(
//
//       <th>{member}</th>
//     )
//   }
//   return (
//     <>
//       <h3>Find an oppurtunity in each situation</h3>
//
//       <Table responsive striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <th key={index}>{data.faqs.tableHeading[index]}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><b>Freshmen</b></td>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <td key={index}>
//               </td>
//             ))}
//           </tr>
//           <tr>
//             <td><b>Sophomore</b></td>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <td key={index}>Table cell {index}</td>
//             ))}
//           </tr>
//           <tr>
//             <td><b>Junior</b></td>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <td key={index}>Table cell {index}</td>
//             ))}
//           </tr>
//           <tr>
//             <td><b>Senoir</b></td>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <td key={index}>Table cell {index}</td>
//             ))}
//           </tr>
//           <tr>
//             <td><b>Alum</b></td>
//             {Array.from({ length: data.faqs.numOfCols }).map((_, index) => (
//               <td key={index}>Table cell {index}</td>
//             ))}
//           </tr>
//         </tbody>
//       </Table>
//     </>
//   )
// }
//
//
//  const notify = (props) => toast( `${props} dvjh`,{autoclose: 10000});

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
        <Col lg={12} className="mt-5 ">
          {/*<FaqTable/>*/}
        </Col>
      </Layout>
    </>
  )
}

export default FaqSection
