const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 900, 1800 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'hotpink';
    context.fillRect(0, 0, width, height);
    context.lineWidth = (width+height)*0.002

    const w = width*0.1, h = height*0.1, gap = width/6;
            const rows = width/20, columns = height/20;
            let x, y, radius;

            for (let i = 0; i < rows; i++){
                y = (w + gap)*i;
                for (let j = 0; j < columns; j++){
                    x = (h + gap)*j;
                    context.beginPath();
                    // context.rect(x, y, width, height);
                    // context.arc(x, y, 10, 0, Math.PI*2);
                    radius = Math.random()*(width+height)/12;
                    if(Math.random() > 0.5)
                        context.arc(x, y, radius, 0, Math.PI*2);
                    context.stroke();
                }
            }

  };
};

canvasSketch(sketch, settings);
