// Create twinkling stars
const starsContainer = document.getElementById('starfield');
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.position = 'absolute';
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    star.style.animation = `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite`;
    starsContainer.appendChild(star);
}

// Mini-game logic
let score = 0;
let gameInterval;
const pirate = document.getElementById('pirate');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const closeButton = document.getElementById('close-button');

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    pirate.style.display = 'block';
    movePirate();
    gameInterval = setInterval(movePirate, 1000); // Move pirate every second
}

function movePirate() {
    const x = Math.random() * (window.innerWidth - 50); // 50 is the width of the pirate icon
    const y = Math.random() * (window.innerHeight - 50); // 50 is the height of the pirate icon
    pirate.style.left = `${x}px`;
    pirate.style.top = `${y}px`;
}

pirate.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    movePirate();
});

startButton.addEventListener('click', () => {
    gameContainer.style.display = 'block';
    startGame();
});

closeButton.addEventListener('click', () => {
    clearInterval(gameInterval);
    pirate.style.display = 'none';
    gameContainer.style.display = 'none';
});

// Hide the pirate icon initially
pirate.style.display = 'none';
