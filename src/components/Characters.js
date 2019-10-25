import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
background: white;
width: 100%;
height: 100vh;
`

// var characters = {
//     "characters": [
//         { "name": "Michael", "image": "" },
//         { "name": "Dwight", "image": "" },
//         { "name": "Pam", "image": "" },
//         { "name": "Jim", "image": "" },
//         { "name": "Creed", "image": "" },
//         { "name": "Meredith", "image": "" },
//         { "name": "Kevin", "image": "" },
//         { "name": "Angela", "image": "" },
//         { "name": "Oscar", "image": "" },
//         { "name": "Phyllis", "image": "" },
//         { "name": "Stanley", "image": "" },
//         { "name": "Kelly", "image": "" },
//         { "name": "Ryan", "image": "" },
//         { "name": "Nate", "image": "" },
//         { "name": "Darryl", "image": "" },
//         { "name": "Andy", "image": "" }
//     ]
// }
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

function Characters() {
    return (
        <div className="Characters">
            <Body>

            </Body>


        </div>
    );
}

export default Characters;