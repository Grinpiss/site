document.addEventListener("DOMContentLoaded", function() {
  const dino = document.getElementById("dino");
  const cactus = document.getElementById("cactus");
  let isGameOver = false;
  let score = 0;

  // Function to check for collision and end the game if detected
  let gameLoop = setInterval(function() {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
          clearInterval(gameLoop); // Остановить игровой цикл
          alert("GAME OVER!!");
          isGameOver = true; // Установить флаг окончания игры
          score = 0; // Обнулить счет
          document.getElementById("score").innerText = score; // Обновить отображение счета
      }

      if (!isGameOver && parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) < 0) {
          score++; // Увеличиваем счет, если кактус успешно прошел за пределы экрана слева
          document.getElementById("score").innerText = score; // Обновляем отображение счета
      }
  }, 10);

  document.addEventListener("keydown", function(event) {
      jump();
  });

  function jump() {
      if (!isGameOver && dino.classList != "jump") {
          dino.classList.add("jump");
          setTimeout(function() {
              dino.classList.remove("jump");
          }, 300);
      }
  }
});