// ****** DEFAULT IMPORTS BEGIN ********
import React from "react"
import { Link } from "gatsby"
import data from "../../assets/data"
import styled from "styled-components"
import { Button, Form, Carousel, Col, Row } from "react-bootstrap"
import { Layout, Navigation, Jumbotron } from "../generalComponents"
// ******** DEFAULT IMPORTS END ********


const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const CustomButton = styled(Button)`
  background: #D37050;
  color: white;
  border: 2px solid #fcf6ee;

  &:active, &:hover, &:focus, &:visited {
    background: #E2A28D;
    border: 2px solid #fcf6ee;
  }
`

const ContactSection = () => {
  return (
    <>
      <Layout>
        <Navigation/>
        <Col lg={12} className="mt-5 d-flex align-items-center">
        <div>
          <BiggerH1 className="catchPhrase">Contact</BiggerH1>
        </div>
        </Col>
        <Col lg={12} className="mt-5 d-flex align-items-center">
          <Form
            name="contact-v2"
            method="POST"
            netlify="true"
            action="/success"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-v2" />
            <Form.Group hidden controlId="formBasicName">
              <Form.Label> First Name </Form.Label>
              <Form.Control
                type="firstname"
                placeholder="firstname"
                htmlSize={50}
                name="bot-field"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label> Name </Form.Label>
              <Form.Control
                required
                type="email"
                htmlSize={50}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message </Form.Label>
              <Form.Control
                as="textarea"
                rows={6} placeholder="How can we help?"
                name="message"
                />
            </Form.Group>
            <CustomButton type="submit" className="mt-2" size="lg">
              Submit
            </CustomButton>
          </Form>
        </Col>
      </Layout>

    </>
  )
}

export default ContactSection
