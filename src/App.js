import React from 'react';
import './App.css';
import Header from './components/Header.js'
import ClickyText from './components/ClickyText.js'
import Pattern from './components/Patterns.js'
import Footer from './components/Footer.js'

var patterns = {
  "coolPatterns": [
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

function shufflePatts(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends React.Component {
  state = {
    patterns,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
  };

  handleClick = name => {
    if (this.state.clicked.indexOf(name) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(name) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Click on an image to begin!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 10) {
      this.setState({ message: "Yay, you win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Boo, you suck",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shufflePatts(patterns);
    this.setState({ patterns: shuffledCharacters });
  };

  render() {
    return (
      <div>
        <Header
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <ClickyText />
        {this.state.patterns.coolPatterns.map(pattern => (
          <Pattern
            key={patterns.coolPatterns.name}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            name={patterns.coolPatterns.name}
            image={patterns.coolPatterns.image}

          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
