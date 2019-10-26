import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
background: white;
width: 100%;
height: 100vh;
`

const Image = styled.img`
padding: 5px;
height: 100%;
width: 50px;
background: black;
height: 250px;
padding: auto;
margin: 10px 50px;
`

const Pattern = props => (
    <div>
        <Body>
            <Image className="patts"
                value={props.name}
                alt={props.name}
                src={props.image}
                onClick={() => props.handleClick(props.name)} />
        </Body>
    </div>
);
export default Pattern;