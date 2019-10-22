import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
background-image: url("https://wallpaperaccess.com/full/414446.jpg");
width: 100%;
height: 40vh;
padding: 1%;
`
const Text = styled.p`
color: black;
`
const Heading = styled.h1`
color: black;
`

function ClickyText() {
    return(
        <Main className="ClickyText">
        <Heading>
        Clicky Game!
        </Heading>
        <Text>
        Click on an image to earn points, but don't click on any more than once!
        </Text>
  
       
      </Main>
    );
}

export default ClickyText;