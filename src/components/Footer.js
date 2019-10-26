import React from 'react';
import styled from 'styled-components'

const Foot = styled.div`
position: fixed;
text-align: center;
bottom: 0;
width: 100%;
height: 10vh;
background: #2c53cb;
border-bottom: 3vh solid #203288;
`

const Text = styled.h6`
vertical-align: bottom;
color: white;
font-weight: bold;
padding: 5px;
`

function Footer() {
  return (
    <Foot className="Footer">

      <Text>
        Clicky Game!
        </Text>

    </Foot>
  );
}

export default Footer;