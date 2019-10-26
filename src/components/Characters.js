import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
background: white;
width: 100%;
height: 100vh;
`

const Image = styled.img`

`

var characters = {
    "characters": [
        { "name": "Arrow", "image": "../assets/images/arrow.jpg" },
        { "name": "Braid", "image": "../assets/images/braid.jpg" },
        { "name": "BraidHor", "image": "../assets/images/braidHor.jpg" },
        { "name": "Chevron", "image": "../assets/images/chevron.jpg" },
        { "name": "ChevronWhite", "image": "../assets/images/chevronWhite.jpg" },
        { "name": "Circles", "image": "../assets/images/circles.jpg" },
        { "name": "Diamond", "image": "../assets/images/diamond.jpg" },
        { "name": "DiamondHor", "image": "../assets/images/diamondHor.jpg" },
        { "name": "Inter", "image": "../assets/images/inter.jpg" },
        { "name": "LineDiagonal", "image": "../assets/images/lineDiagonal.jpg" },
        { "name": "Polka", "image": "../assets/images/polka.jpg" },
        { "name": "Square", "image": "../assets/images/square.jpg" }
    ]
}

// var shuffledChars = shuffle(chars.characters);
// shuffledChars.forEach(function (char) {
//     console.log(char.name + ": " + char.image);
// });
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//     return array;
// }

const Characters = props => (
    <div>
        <Body
            className="mycard"
            value={props.name}
            onClick={() => props.handleClick(props.name)}
        >
            <Image alt={props.name} src={props.image} />

        </Body>
    </div>
);
export default Characters;