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

const Jumbotron = () => (
  <>
    <Row>
      <Col lg={12}>
        <div className="">
          <BiggerH1>
            Be the most effective in your job serch
          </BiggerH1>
          <div className="pt-3">
          We understand the value of quality end products that will last generations and will be loved by all members of the community alike.
          </div>
        </div>
    </Col>
      <Col lg={12}>
        <div className="pt-3">
          <a href="../../assets/Topics.pdf" download><StyledButton color="red" text="Topics Covered"/></a>
          <a href="https://www.google.com"><StyledButton color="red" light text="Eventbrite Tickets"/></a>
        </div>
      </Col>
    </Row>
  </>
)

export default Jumbotron
