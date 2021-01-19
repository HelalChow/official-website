import React from "react"
import { Container, Col, Row, Card, Image } from 'react-bootstrap'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../assets/data"

import {
  faFilter,
  faSearch,
  faLaptop,
  faTools,
  faCamera,
  faUsers,
  faCircle

} from "@fortawesome/free-solid-svg-icons";

const CustomCard = styled(Card)`
  border: none;
  transition: transform 1s ease;
  border-radius: 2rem;
  &:hover {
    transform: scale(.9);
  }
  /* max-width:10rem; */
`
const BetterImage = styled(Image)`
  max-width: 3rem;
`

const CardHeading = styled.h4`
  font-size: 1.15rem;
  font-weight: 900;
`


const TestimonialCard = (props) => {
  return (
    <>
      <Col lg={{ span: 12, offset:0 }}>
        <CustomCard className="my-4 mx-2 shadow-none ">
          <Card.Body className="p-0">
            <Row>
              {/*<Col lg={12} className="mt-3 text-center">
                <Card.Text>
                  {"Achieve the highest ROI by reaching audiences most interested in your products and services. 90% of business owners reported that social media targeted ads "}
                </Card.Text>
              </Col>*/}

              <Col lg={12} className="d-flex align-items-center justify-content-center">
              <span class="">
                "{data.testimonials[0].message}"

              </span>
              </Col>
              <Col lg={12} className=" pt-2 d-flex align-items-center justify-content-center">
                  <b>- Bibi, Google Intern, QC</b>
                  <BetterImage className="ml-3" src="https://picsum.photos/171/180" roundedCircle />
              </Col>
            </Row>
          </Card.Body>
        </CustomCard>
      </Col>
    </>
  )
}

export default TestimonialCard
