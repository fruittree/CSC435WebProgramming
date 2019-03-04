var ballY = 0;
var ballVelocity = 0;

window.onload = function() {
    var ball = document.getElementById("ball");
    ball.style.top = ballY + "px";
    ball.style.left = 600/2 - 40/2 + "px";
    setInterval(update, 20);
};

function update() {
    var ball = document.getElementById("ball");
    ball.style.top = ballY + "px";
    ballY = Math.min(ballY + ballVelocity, 360);
    ballVelocity += 1;

    if (ballY >= 360) {
        ballVelocity = parseInt(-3 * ballVelocity / 4);
    }
}