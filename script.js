const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const missedEl = document.getElementById("missed");

let score = 0;
let missed = 0;

let playerX = 170;
let moveLeft = false;
let moveRight = false;

// Smooth player movement loop
function movePlayer() {
  if (moveLeft) playerX -= 5;
  if (moveRight) playerX += 5;

  playerX = Math.max(0, Math.min(340, playerX));
  player.style.left = `${playerX}px`;

  requestAnimationFrame(movePlayer);
}
movePlayer();
