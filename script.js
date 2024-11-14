let score = 0;
let gameStarted = false;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById('start-btn').innerText = 'توقف بازی';
        startObstacleMovement();
    } else {
        gameStarted = false;
        document.getElementById('start-btn').innerText = 'شروع بازی';
        stopObstacleMovement();
    }
}

function startObstacleMovement() {
    const obstacle = document.getElementById('obstacle');
    let obstaclePosition = 400; // Starting position of the obstacle

    const moveObstacleInterval = setInterval(() => {
        if (!gameStarted) {
            clearInterval(moveObstacleInterval);
            return;
        }

        obstaclePosition -= 5;
        obstacle.style.right = obstaclePosition + 'px';

        // Check collision with player
        if (obstaclePosition < 100 && obstaclePosition > 50 && isCollision()) {
            alert('بازی تمام شد! امتیاز شما: ' + score);
            resetGame();
        }

        // Increase score over time
        score++;
        document.getElementById('score').innerText = 'امتیاز: ' + score;
    }, 100);
}

function stopObstacleMovement() {
    const obstacle = document.getElementById('obstacle');
    obstacle.style.animation = 'none'; // Stop the obstacle movement
}

function isCollision() {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    return !(playerRect.top > obstacleRect.bottom || playerRect.bottom < obstacleRect.top || playerRect.left > obstacleRect.right || playerRect.right < obstacleRect.left);
}

function resetGame() {
    score = 0;
    document.getElementById('score').innerText = 'امتیاز: ' + score;
    gameStarted = false;
    document.getElementById('start-btn').innerText = 'شروع بازی';
    document.getElementById('obstacle').style.right = '-50px';
}
