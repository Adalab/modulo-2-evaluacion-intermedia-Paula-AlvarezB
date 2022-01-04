"use strict";

//Bring HTML
const state = document.querySelector(".js-state");
const userInput = document.querySelector(".js-tool");
const button = document.querySelector(".js-button");
const button2 = document.querySelector(".js-button2");
const playerCounter = document.querySelector(".js-counterPlayer");
const computerCounter = document.querySelector(".js-counterComputer");
const image = document.querySelector(".image-js");
const computerChoice = document.querySelector(".js-computer");
let attempts = 0;
let indexPlayer = 0;
let indexComputer = 0;

//DECLARE FUNCTIONS

//Function generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//Function transform random number to computer's tools

function getComputerValue() {
  const randomNum = getRandomNumber(10);
  let computerTool;
  if (randomNum < 3) {
    computerTool = "piedra";
  } else if (randomNum <= 6) {
    computerTool = "papel";
  } else {
    computerTool = "tijera";
  }
  return computerTool;
}
function addPointToUser() {
  indexPlayer++;
}
function addPointToComputer() {
  indexComputer++;
}
//DECLARE BUTTON FUNCTION
function handleClickUpdate(event) {
  event.preventDefault();
  image.classList.toggle("rotate");
  attempts++;
  paintHTML();
}
function paintHTML() {
  const computerTool = getComputerValue();
  const userTool = userInput.value;
  computerChoice.innerHTML = `El ordenador ha elegido ${computerTool}`;

  console.log(`attempts${attempts}`);

  if (userTool === computerTool) {
    state.innerHTML = `Empate`;
  } else if (
    (userTool === "tijera" && computerTool === "papel") ||
    (userTool === "piedra" && computerTool === "tijera") ||
    (userTool === "papel" && computerTool === "tijera")
  ) {
    state.innerHTML = "¡Has ganado!";
    addPointToUser();
    playerCounter.innerHTML = `Jugador:${[indexPlayer]}`;
  } else {
    state.innerHTML = "Has perdido";
    addPointToComputer();
    computerCounter.innerHTML = `Computadora: ${[indexComputer]}`;
  }
  if (attempts === 10) {
    button.classList.add("hidden");
    button2.classList.remove("hidden");
  }
}

//Function click button 2
function handleClick2Update(ev) {
  ev.preventDefault;
  attempts = 0;
  indexPlayer = 0;
  playerCounter.innerHTML = `Jugador: 0`;
  computerCounter.innerHTML = `Computadora: 0`;
  button.classList.remove("hidden");
  button2.classList.add("hidden");
}

//EVENT LISTENER BUTTONS
button.addEventListener("click", handleClickUpdate);
button2.addEventListener("click", handleClick2Update);
