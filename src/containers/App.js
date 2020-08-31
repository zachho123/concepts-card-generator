import React from 'react';
import { fabric } from 'fabric';
// import cardImg from '../assets/img/my-blank-card.png';
import blankCardsImg from '../assets/img/my-blank-cards.png';

// Assets
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numCards: 68
    };

    this.handleDownload = this.handleDownload.bind(this);
  }

  componentDidMount() {
    let canvas = new fabric.Canvas(
      document.getElementById('canvas'),
      { width: 5000, height: 4900 }
    );

    let cardElement = document.getElementById('blankCard');
    let cardInstance = new fabric.Image(cardElement);
    
    setTimeout(() => {
      canvas.add(cardInstance)},
      1000);
  }

  handleDownload(e) {
    const canvas = document.getElementById('canvas');
    const target = e.target;
    target.href = canvas.toDataURL({
      format: 'png',
      // format: 'hpg',
      // quality: 0.8
    });
    target.download = 'canvas.png';
  }

  render() {
    return (
      <>
        <canvas id="canvas"></canvas>
        <img src={blankCardsImg} id="blankCard" alt="card" hidden />
        <a id="download" href="#" onClick={this.handleDownload}>Download</a>
      </>
    );
  }
}

export default App;