const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'turquoise';

    const x = width * 0, y = height * 0;
    const w = width * 0.5, h = height * 0.5;

    context.beginPath();
    context.rect(x,y,w,h);
    context.fill();

    // Transforming the context
    context.rotate()
  };
};

canvasSketch(sketch, settings);
