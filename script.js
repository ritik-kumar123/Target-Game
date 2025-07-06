let numberOfCircle = 90;
let timerValue = document.querySelector(".timerValue");
let numberContainer = document.querySelector(".numberContainer");
let scoreValue = document.querySelector(".scoreValue");
let targetValue = document.querySelector(".targetValue");

function generateCircles() {
  for (let i = 0; i < numberOfCircle; i++) {
    let randomNo = Math.ceil(Math.random() * 10);
    let divElem = document.createElement("div");
    divElem.className = "circle";
    divElem.innerText = `${randomNo}`;
    numberContainer.append(divElem);
  }
}

function showGameOverScreen() {
  numberContainer.innerHTML = `
    <div style="text-align: center;">
      <h1>Game Over</h1>
      <div class="updatedScoreValue">Your score is:<br>${scoreValue.innerText}</div>
      <button onclick="location.reload();">Play Again</button>
    </div>
  `;
}

function updateTimer() {
  if (timerValue.innerText <= 0) {
    showGameOverScreen();
    return;
  }
  timerValue.innerText = timerValue.innerText - 1;
}

function generateTarget()
{
  targetValue.innerText = Math.ceil(Math.random() * 10);
}


function handleCircleClick(e) {
  if (e.target.innerText == targetValue.innerText) {
    scoreValue.innerText = Number(scoreValue.innerText) + 10;
    generateTarget();
    timerValue.innerText = 10;
  }
}

// Initial setup
generateCircles();
generateTarget();
setInterval(updateTimer, 1000);
numberContainer.addEventListener("click", handleCircleClick);
