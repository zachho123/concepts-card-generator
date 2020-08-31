import React from 'react';
import { fabric } from 'fabric';

class DrawCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numCards: 68
    };

    this.handleDownload = this.handleDownload.bind(this);
  }

  componentDidMount() {
    const bgColor = '#F7FAFC';

    const wordSection = {
      width: 400,
      height: 190,
      fill: bgColor,
      strokeWidth: 5,
      rx: 30,
      ry: 30
    };

    let canvas = new fabric.StaticCanvas(
      document.getElementById('canvas'),
      {
        width: 500,
        height: 700,
        backgroundColor: bgColor
      }
    );

    let cardBorder = new fabric.Rect({
      width: 470,
      height: 685,
      fill: bgColor,
      stroke: '#A0AEC0',
      strokeWidth: 4,
      rx: 55,
      ry: 55
    });

    let easyBorder = new fabric.Rect({
      top: 40,
      stroke: 'green',
      width: wordSection.width,
      height: wordSection.height,
      fill: wordSection.fill,
      strokeWidth: wordSection.strokeWidth,
      rx: wordSection.rx,
      ry: wordSection.ry
    });

    let eSep1 = new fabric.Line(
      [1, 105, 350, 105],
      {
        backgroundColor: 'green',
        strokeWidth: 2
      }
    );

    let eSep2 = new fabric.Line(
      [1, 165, 350, 165],
      {
        backgroundColor: 'green',
        strokeWidth: 2
      }
    );

    let medBorder = new fabric.Rect({
      top: 255,
      stroke: 'blue',
      width: wordSection.width,
      height: wordSection.height,
      fill: wordSection.fill,
      strokeWidth: wordSection.strokeWidth,
      rx: wordSection.rx,
      ry: wordSection.ry
    });

    let mSep1 = new fabric.Line(
      [1, 325, 350, 325],
      {
        backgroundColor: 'blue',
        strokeWidth: 2
      }
    );

    let mSep2 = new fabric.Line(
      [1, 385, 350, 385],
      {
        backgroundColor: 'blue',
        strokeWidth: 2
      }
    );

    let hardBorder = new fabric.Rect({
      top: 470,
      stroke: 'red',
      width: wordSection.width,
      height: wordSection.height,
      fill: wordSection.fill,
      strokeWidth: wordSection.strokeWidth,
      rx: wordSection.rx,
      ry: wordSection.ry
    });

    let hSep1 = new fabric.Line(
      [1, 540, 350, 540],
      {
        backgroundColor: 'red',
        strokeWidth: 2
      }
    );

    let hSep2 = new fabric.Line(
      [1, 600, 350, 600],
      {
        backgroundColor: 'red',
        strokeWidth: 2
      }
    );
    
    canvas.add(cardBorder, easyBorder, eSep1, eSep2, medBorder, mSep1, mSep2, hardBorder, hSep1, hSep2);
    cardBorder.center();
    easyBorder.centerH();
    eSep1.centerH();
    eSep2.centerH();
    medBorder.centerH();
    mSep1.centerH();
    mSep2.centerH();
    hardBorder.centerH();
    hSep1.centerH();
    hSep2.centerH();
    
  }

  handleDownload(e) {
    // let canvas = document.getElementById('canvas');
    // let data = canvas.toDataURL('image/jpeg');
    // data = data.replace('/^data:image\/[^;]*/', 'data:application/octet=stream');
    // let downloadButton = document.getElementById('download');
    const canvas = document.getElementById('canvas');
    const target = e.target;
    target.href = canvas.toDataURL({
      format: 'png',
      // quality: 0.8
    });
    target.download = 'canvas.png';
  }

  render() {
    return (
      <>
        <canvas id="canvas" className="card-canvas"></canvas>
        <a id="download" href="#" onClick={this.handleDownload}>Download</a>
      </>
    );
  }
}

export default App;