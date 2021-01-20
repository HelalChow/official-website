// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import { StyledButton, Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********
import { AnchorLink } from "gatsby-plugin-anchor-links"

const HeavyH2 = styled.h2`
  font-weight: 900;
`

const Band = styled(Container)`
  background: ${props => props.color == "light"? "#F7E4DE" : "white"};
  /* color:white; */
`
const CustomLink = styled(AnchorLink)`
  boxShadow: none;
  textDecoration: none;
  color: inherit;

  &:hover {
    boxShadow: none;
    textDecoration: none;
    text-decoration: none !important;
    color: #D37050;
  }
`

const WavyImg = styled.img`
   position: absolute;
   z-index: -1
`

const BlockDiv = styled.div`
  padding-top:5rem;

`

const FooterHelper = (props) => {

  return (
    <Col lg={3} >
      <p class="font-weight-bold">{props.name}</p>
      <p>
      {Array.from({ length: data.footer.[props.list].length }).map((_, index) => (
        <>
          <CustomLink to={data.footer.[props.list][index].link}>
            {data.footer.[props.list][index].text}<br/>
          </CustomLink>
        </>
      ))}
      </p>
    </Col>
  )
}

const Footer = (props) => {

  return (
    <>
    {/*<WavyImg src={require('./wave.svg')}/>*/}
      <BlockDiv>


      <Band fluid className="mt-5" color={"light"}>
        <Container className="mt-5 pt-3">
        <Row className="mt-5 pt-5">
          <Col lg={6} className="">
              <HeavyH2>Ready to order?</HeavyH2>
              <HeavyH2>Start browsing our Services</HeavyH2>
          </Col>
          <Col lg={6} className="">
            <AnchorLink to="/about"><StyledButton color="red" text="About Us"/></AnchorLink>
            <AnchorLink to="/faqs"><StyledButton color="red" light text="FAQs"/></AnchorLink>

          </Col>
        </Row>
        <Row className="mt-3 pt-5">
          <Col lg={2} >
            <p class="font-weight-bold">Headstarter</p>
            <p>
              Headstarter aims to do x for those in school.
            </p>
          </Col>
          <Col lg={1} >
          </Col>
          <FooterHelper name = "Quick Links" list={"quickLinks"}/>
          <FooterHelper name = "Website Stack" list={"websiteStack"}/>
          <FooterHelper name = "Contact Us" list={"contact"}/>
        </Row>
        </Container>
        </Band>
        <Band fluid color={"light"}>
        <Row className="py-2">
          <Col lg={12} className="text-center">
            © {new Date().getFullYear()} — theheadstarter.com
          </Col>
        </Row>
      </Band>
      </BlockDiv>
    </>
  )
}

export default Footer
