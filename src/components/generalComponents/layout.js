import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import styled from "styled-components"

const Band = styled(Container)`
/* min-height: 100vh; */
 /* overflow: hidden;
 display: block; */
 /* position: relative;
 padding-bottom: 100px; */
`

const Layout = ({ children }) => {
  return (
    <>
      <Band className="mb-5">
        <Row>
          {children}
        </Row>
      </Band>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
