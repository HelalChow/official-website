import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"

const CustomButton = styled(Button)`
  background: ${props => props.light ? "#D37050" : "#1681a8"};
  /* color: ${props => props.light ? "#122D4D" : "#D37050"}; */
  border: 2px solid #fcf6ee;


/* figure out how to active to chane custome color */
  &:active {
    background: blue;
    color: #E3A04F;
    border: 2px solid #fcf6ee;
  }

  &:hover {
    background: ${props => props.light ? "#E2A28D" : "#1CA6D9"};
    /* background: default; */
    border: 2px solid #fcf6ee;
  }

  &:focus {
    /* background: $ {props => props.color}; */
    background: ${props => props.light ? "#E2A28D" : "#1CA6D9"};
    border: 2px solid #fcf6ee;
  }

  &:visited {
    background: blue;
    color: #E3A04F;
    border: 2px solid #fcf6ee;
  }
  /* border-radius: 3px; */
  /* padding: 5px 10px; */
  /* text-transform: uppercase; */
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
        className="mr-3"
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
