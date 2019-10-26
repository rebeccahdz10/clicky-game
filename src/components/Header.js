import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
text-align: center;
color: white;
display: inlineBlock;
width: 100%;
background: #3c6beb;
padding: 2% 0%;

`
const Title = styled.a`
color: white;
text-decoration: none;
`

const Header = props => (
  <Wrapper className="Header">
    <div className="header">
      <Title className="title" href="">
        Clicky Game!
      </Title>

      {/* ADD LOGIC FOR STATE TO RENDER CORRECT MESSAGE */}
      <div className="instructions">{props.message || "Click an image to begin!"}</div>
      <div className="scores">
        Current Score: {props.score} | Top Score: {props.topScore}
      </div>
    </div>
  </Wrapper>
);

export default Header;