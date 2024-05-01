document.addEventListener("DOMContentLoaded", function() {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
  
    let isAlive = true; // Flag to track game status
  
    document.addEventListener("keydown", function(event) {
      if (event.keyCode === 32) {
        jump();
      }
    });
  
    function jump() {
      if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
      }
      setTimeout(function() {
        dino.classList.remove("jump");
      }, 300);
    }
  
    // Function to check for collision and end the game if detected
    function checkCollision() {
      let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  
      if (cactusLeft < 50 && cactusLeft > 0 && dinoBottom <= 70) {
        isAlive = false; // Set game status to false
        clearInterval(gameLoop); // Stop the game loop
        alert("GAME OVER!!");
      }
    }
  
    // Game loop
    let gameLoop = setInterval(function() {
      if (isAlive) {
        checkCollision(); // Check for collision only if the game is active
      }
    }, 10);
  });
 