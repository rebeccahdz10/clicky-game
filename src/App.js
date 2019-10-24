import React from 'react';
import './App.css';
import Header from './components/Header.js'
import ClickyText from './components/ClickyText.js'
import Characters from './components/Characters.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      <Header />
      <ClickyText />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
