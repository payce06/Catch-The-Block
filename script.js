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

// Keyboard event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") moveLeft = true;
  if (e.key === "ArrowRight") moveRight = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") moveLeft = false;
  if (e.key === "ArrowRight") moveRight = false;
});

function createBlock() {
  const block = document.createElement("div");
  block.classList.add("falling-block");
  block.style.left = `${Math.floor(Math.random() * 370)}px`;

  game.appendChild(block);
