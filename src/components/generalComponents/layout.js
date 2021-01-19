import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          {children}
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
