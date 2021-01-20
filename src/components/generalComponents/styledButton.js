import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import data from "../../assets/data"

const CustomButton = styled(Button)`
  background: ${props => props.light ? data.color.lightShade : data.color.darkShade};
  /* color: ${props => props.light ? "#122D4D" : "#D37050"}; */
  border: 2px solid #fcf6ee;


  &:active, &:hover, &:focus, &:visited {
    background: ${props => props.light ? data.color.hover.lightShade : data.color.hover.darkShade};
    border: 2px solid #fcf6ee;
  }
`
const StyledButton = (props) => {
  // state = {
  //   isActive: false
  // };
  //
  // handleClick = () => {
  //   this.setState(state => ({ isActive: !state.isActive }));
  // };

  return (
    <>
      <CustomButton
        className="mr-3 rounded-pill"
        size="lg"
        variant="secondary"
        color={props.color}
        light={props.light}
      >
        {props.text}
      </CustomButton>
    </>
  )
}
export default StyledButton
