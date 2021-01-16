import React from "react"
import styled from "styled-components"

const BiggerH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 100%;
`

const Jumbotron = () => (
  <div>
    <BiggerH1>
      Be the most effective in your job serch
    </BiggerH1>
    <div className="pt-3">
    We understand the value of quality end products that will last generations and will be loved by all members of the community alike.
    </div>
  </div>
)

export default Jumbotron
