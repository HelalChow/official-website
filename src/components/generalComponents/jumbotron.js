import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import  StyledButton  from "./styledButton"
import { Image, Container, Col, Row, Nav, Navbar, Button } from "react-bootstrap"
import { Link } from "gatsby"
import data from "../../assets/data"

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`
const WavyImg = styled.img`
   position: absolute;
   margin:auto;
   left: auto;
    top: auto;
    z-index: -1
`
const Jumbotron = (props) => {
  console.log("boom", props.section);
  return (
    <>
      <Row>

        <Col lg={12}>
          <div className="">
            <BiggerH1>
              {data.jumbotron[props.section].bigText}
            </BiggerH1>

            <div className="pt-3">
              {data.jumbotron[props.section].descrip}
            </div>
          </div>

      </Col>
      {/*<WavyImg src={require('./blob.svg')}/>*/}
        <Col lg={12}>
          <div className="pt-3">
            <a download href={require(`../../assets/schedule/Topics.pdf`)} ><StyledButton color="red" text="Download Schedule"/></a>
            <a href="https://www.google.com"><StyledButton color="red" light text="Get Tickets"/></a>
          </div>
        </Col>
      </Row>
    </>
  )
}



export default Jumbotron
