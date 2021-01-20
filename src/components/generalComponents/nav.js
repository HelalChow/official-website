import React from "react"
import { Container, Col, Row, Nav, Navbar, Button } from "react-bootstrap"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import data from "../../assets/data"

const CustomLink = styled(AnchorLink)`
  boxShadow: none;
  textDecoration: none;
  color: inherit;
  font-weight: 500;

  &:hover {
    boxShadow: none;
    textDecoration: none;
    text-decoration: none !important;
    color: {data.color.hover.lightShade};
  }
`

const Navigation = () => {
  var navItemsHTML = []
  const numOfSections = data.navText.length

  for (let navIndex = 0; navIndex < numOfSections; navIndex++){
    const navText = data.navText[navIndex]
    const navLink = navText.toLowerCase()
    {/*to= {`/${navText}`}*/}
    navItemsHTML.push(
        <CustomLink
          to= {`${ navLink == "home" ? "/" : "/" + navLink}`}
          className="mr-4 mt-3"
        >
          {navText}
        </CustomLink>
    )
  }

  return (
    <>
    {/*col 12 starts here*/}
      <Col lg={12} className="">
        <Navbar className="p-0" expand="lg">
        <Navbar.Brand className="mt-3 ">
          <CustomLink to="/">
            {data.logoText}
            {/*<img className="m-0" src={require('../assets/headstart3.png')} alt="Chrono Group"/>*/}
          </CustomLink>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="font-weight-bold  ml-auto">
              {navItemsHTML}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      {/*col 12 ends here*/}
    </>
  )
}
export default Navigation
