import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
background-image: url("https://wallpaperaccess.com/full/414446.jpg");
width: 100%;
height: 40vh;
border: 5;
`
const TextWrapper = styled.div`
top: 500px;
margin: auto;
`

const Text = styled.p`
color: black;
`
const Heading = styled.h1`
color: black;
margin: 0;
`
// margin: auto

function ClickyText() {
  return (
    <Main className="ClickyText">
      <TextWrapper>
        <Heading>
          Clicky Game!
        </Heading>
        <Text>
          Click on an image to earn points, but don't click on any more than once!
        </Text>
      </TextWrapper>
    </Main>
  );
}

export default ClickyText;