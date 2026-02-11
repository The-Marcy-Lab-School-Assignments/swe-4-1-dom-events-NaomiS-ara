let count = 0;
let timeLeft = 10;
let timer = null;
let highScores = [];

const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const highScoresEl = document.getElementById("high-scores");

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      timer = null;
      highScores.push(count);
      renderHighScores();
    }
  }, 1000);
}

incrementBtn.addEventListener("click", () => {
  if (timeLeft === 0) return;

  startTimer();
  count++;
  countEl.textContent = count;
  scoreEl.textContent = `Score: ${count}`;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  timeLeft = 10;
  countEl.textContent = 0;
  timerEl.textContent = "Time left: 10";
  scoreEl.textContent = "Score: 0";

  clearInterval(timer);
  timer = null;
});

function renderHighScores() {
  highScoresEl.innerHTML = "";
  highScores.forEach((score) => {
    const li = document.createElement("li");
    li.textContent = score;
    highScoresEl.appendChild(li);
  });
}
