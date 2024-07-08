let score = 0;

let scoreCounter = document.getElementById("scoreCounter");

const buttons = document.querySelectorAll(".container button");
const button = document.querySelector(".container");
//  console.log(button)

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.visibility = "hidden";
    score++;
    scoreCounter.textContent = score;
  });
});

setTimeout(()=>{
    container.innerHTML='<p class="game-over">game over </p>';
},50000);
