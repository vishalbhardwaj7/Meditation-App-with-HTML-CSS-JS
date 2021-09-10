// Gather instances
const twoMin = document.getElementById("twoMin");
const fiveMin = document.getElementById("fiveMin");
const tenMin = document.getElementById("tenMin");
const play = document.getElementById("play");
const timer = document.getElementById("timer");
const day = document.getElementById("day");
const night = document.getElementById("night");
const container = document.getElementById("container");
const contact = document.getElementById("contact");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
let timeValue = 300000;
let playing = false;
var dayAudio = new Audio("./sounds/beach.mp3");
var nightAudio = new Audio("./sounds/rain.mp3");
let currentAudio = dayAudio;
currentAudio.currentTime = 0.0;
let interval;
//--------------- utility functions

function reset() {
  play.innerHTML = `<i class="fas fa-play-circle"></i>`;
  play.style.backgroundColor = "chartreuse";
  playing = false;
  currentAudio.pause();
  currentAudio.currentTime = 0.0;
  timer.innerText = "00:00";
  clearInterval(interval);
}

//----------- set timeOut
function settimeout(time) {
  currentAudio.play();
  let minutes = 0;
  let seconds = 0;
  interval = setInterval(() => {
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }

    timer.innerText = `${minutes}:${seconds++}`;
  }, 1000);

  setTimeout(() => {
    currentAudio.pause();
    currentAudio.currentTime = 0.0;
    playing = false;
    play.style.backgroundColor = "chartreuse";
    timer.innerText = "00:00";
    play.innerHTML = `<i class="fas fa-play-circle"></i>`;
    clearInterval(interval);
  }, time);
}
// adding event listeners
tenMin.addEventListener("click", () => {
  tenMin.style.backgroundColor = "grey";
  twoMin.style.backgroundColor = "chartreuse";
  fiveMin.style.backgroundColor = "chartreuse";
  timeValue = 600000;
});
twoMin.addEventListener("click", () => {
  tenMin.style.backgroundColor = "chartreuse";
  twoMin.style.backgroundColor = "grey";
  fiveMin.style.backgroundColor = "chartreuse";
  timeValue = 120000;
});
fiveMin.addEventListener("click", () => {
  tenMin.style.backgroundColor = "chartreuse";
  twoMin.style.backgroundColor = "chartreuse";
  fiveMin.style.backgroundColor = "grey";
  timeValue = 300000;
});
play.addEventListener("click", () => {
  if (!playing) {
    play.innerHTML = `<i class="fas fa-pause-circle"></i>`;
    play.style.backgroundColor = "grey";
    playing = true;
    settimeout(timeValue);
  } else {
    play.innerHTML = `<i class="fas fa-play-circle"></i>`;
    clearInterval(interval);
    timer.innerText = "00:00";
    currentAudio.pause();
    currentAudio.currentTime = 0.0;
    playing = false;
    play.style.backgroundColor = "chartreuse";
  }
});
day.addEventListener("click", () => {
  day.style.backgroundColor = "grey";
  night.style.backgroundColor = "chartreuse";
  reset();
  currentAudio = dayAudio;
  day.style.color = "orange";
  container.style.backgroundImage = `url("./images/day.jpg")`;
});
night.addEventListener("click", () => {
  night.style.backgroundColor = "grey";
  day.style.backgroundColor = "chartreuse";
  reset();
  currentAudio = nightAudio;
  day.style.color = "white";
  container.style.backgroundImage = `url("./images/night.jps.jpg")`;
});
contact.addEventListener("click", () => {
  window.open("https://www.instagram.com/vishal__7__/", "_blank");
});
