import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import  StyledButton  from "./styledButton"
import { Container, Col, Row, Nav, Navbar, Button } from "react-bootstrap"
import { Link } from "gatsby"

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const Jumbotron = (props) => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="">
            <BiggerH1>
              Let us help you land your dream job
            </BiggerH1>
            <div className="pt-3">
            We understand the value of quality end products that will last generations and will be loved by all members of the community alike.
            </div>
          </div>
      </Col>
        <Col lg={12}>
          <div className="pt-3">
            <a href={require(`../../assets/Topics.pdf`)} ><StyledButton color="red" text="Topics"/></a>
            <a href="https://www.google.com"><StyledButton color="red" light text="Eventbrite"/></a>
          </div>
        </Col>
      </Row>
    </>
  )
}



export default Jumbotron
