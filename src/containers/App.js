import React from 'react';
import { fabric } from 'fabric';

// Assets
import logo from '../assets/img/logo.svg';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCards: 68
    };
  }

  componentDidMount() {
    let canvas = new fabric.StaticCanvas(
      document.getElementById('canvas'),
      {
        width: 500,
        height: 700,
        backgroundColor: '#FFFAF0'
      }
    );

    let cardBorder = new fabric.Rect({
      left: 10,
      top: 10,
      width: 480,
      height: 680,
      fill: '#FFFAF0',
      stroke: 'blue',
      strokeWidth: 1
    });

    let easyBorder = new fabric.Rect({
      left: 20,
      top: 20,
      width: 440,
      height: 200,
      fill: '#FFFAF0',
      stroke: 'green',
      strokeWidth: 2
    });

    let medBorder = new fabric.Rect({
      left: 20,
      top: 230,
      width: 440,
      height: 200,
      fill: '#FFFAF0',
      stroke: 'blue',
      strokeWidth: 2
    });

    let hardBorder = new fabric.Rect({
      left: 20,
      top: 440,
      width: 440,
      height: 200,
      fill: '#FFFAF0',
      stroke: 'red',
      strokeWidth: 2
    });
    
    canvas.add(cardBorder, easyBorder, medBorder, hardBorder);
  }

  render() {
    return (
      <canvas id="canvas" className="card-canvas"></canvas>
    );
  }
}

export default App;