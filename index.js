document.addEventListener("DOMContentLoaded", function() {
  const dino = document.getElementById("dino");
  const cactus = document.getElementById("cactus");

  document.addEventListener("keydown", function(event) {
      if (event.keyCode === 32) { // Проверяем, что нажата клавиша "Пробел"
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

  let isAlive = setInterval(function() {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 0) {
          clearInterval(isAlive); // Останавливаем проверку, если игра окончена
          alert("GAME OVER!!");
      }
  }, 10);
});