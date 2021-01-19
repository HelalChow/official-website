import React from "react"
import { Container, Col, Row, Carousel, Card } from 'react-bootstrap'
import styled from "styled-components"
import  StyledButton  from "./styledButton"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const HeavyH2 = styled.h2`
  font-weight: 900;
`

const Band = styled(Container)`
  background: #FCF6EE;
`



const Footer = (props) => {
  return (
    <>
      <Container className="mt-5">
        {/*<Row className="mt-5 pt-5">
          <Col lg={6} >
              <HeavyH2>Ready to order?</HeavyH2>
              <HeavyH2>Start browsing our Services</HeavyH2>
          </Col>
          <Col lg={6} className="order">
            <AnchorLink to="/services"><StyledButton color="red" text="Our Services"/></AnchorLink>
            <AnchorLink to="/contact"><StyledButton color="red" light text="Contact Us"/></AnchorLink>

          </Col>
        </Row>*/}

        {/*<Row className="my-5 pt-5">
          <Col lg={6} >
            <p class="font-weight-bold">Golden Blocks Construction</p>
            <p>
              Since 1976 we have been providing our services to the NYC area, with a focus on Brooklyn and Queens. As a family owned business, we strive to provide families and residences with the utmost quality work that is both durable and aesthetically pleasing.
            </p>
          </Col>
          <Col lg={2} >
            <p class="font-weight-bold">Quick Links</p>
            <p> Our Products
              <br/> Gallery
              <br/> About
            </p>
          </Col>
          <Col lg={2} >
            <p class="font-weight-bold">Social Media</p>
            <p> Facebook
              <br/>Instagram
              <br/>Twitter
            </p>
          </Col>
          <Col lg={2} >
            <p class="font-weight-bold">Contact Us</p>
            <p> Tel: +212615626671
              <br/>Email: gbbl@gmail.com
            </p>
          </Col>
        </Row>*/}
      </Container>

      <Band fluid>
        <Row className="py-2">
          <Col lg={12} className="text-center">
            © {new Date().getFullYear()} — Golden Blocks Construction
          </Col>
        </Row>
      </Band>
    </>
  )
}

export default Footer
