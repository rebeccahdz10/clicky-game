import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
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
// class App extends Component {
//   state = {
//     cards,
//     currentScore: 0,
//     topScore: 0
//   };
// }

const Header = props => (
  <Wrapper className="Header">
    <div className="header">
      <Title className="title" href="">
        Clicky Game!
      </Title>

      {/* ADD LOGIC FOR STATE TO RENDER CORRECT MESSAGE */}
      <div className="instructions">{props.children}</div>
      <div className="scores">
        Current Score: {props.score} Top Score: {props.highscore}
      </div>
    </div>
  </Wrapper>
);

export default Header;