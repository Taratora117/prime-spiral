import {
  SIZE,
  FPS,
} from './common/constants.js';
import spiral from './helpers/spiral.js';
import prime from './helpers/prime.js';

// init
document.getElementById('root').innerHTML = `<canvas id="myCanvas" height="${SIZE}" width="${SIZE}" style="background-color: black;"></canvas>`;
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'white';

// TODO make more abstract
const matrix = spiral(SIZE, 100);
let n = 1;

function animate() {

  if (n <= 10000) {
    if (prime(n)) {
      ctx.fillRect(matrix[n][0], matrix[n][1], SIZE / 100, SIZE / 100)
    };
    n++;
  }

  setTimeout(() => {
    window.requestAnimationFrame(animate);
  }, 1000 / FPS);
};
animate();
