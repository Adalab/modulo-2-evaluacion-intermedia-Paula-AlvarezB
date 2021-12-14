"use strict";

//Bring HTML
const state = document.querySelector(".js-state");
const userInput = document.querySelector(".js-tool");
const button = document.querySelector(".js-button");
const button2 = document.querySelector(".js-button2");
const playerCounter = document.querySelector(".js-counterPlayer");
const computerCounter = document.querySelector(".js-counterComputer");
let attempts = 0;
let indexPlayer = 0;
let indexComputer = 0;

//DECLARE FUNCTIONS

//Function generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//Function transform random number to computer's tools

function computerValue() {
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

//DECLARE BUTTON FUNCTION
function handleClickUpdate(event) {
  event.preventDefault();
  const computerTool = computerValue();
  const userTool = userInput.value;
  console.log(
    `el usuario elige ${userTool} y el ordenador elige ${computerTool}`
  );

  attempts++;
  console.log(`attempts${attempts}`);

  if (userTool === computerTool) {
    state.innerHTML = `Empate`;
  } else if (
    (userTool === "tijera" && computerTool === "papel") ||
    (userTool === "piedra" && computerTool === "tijera") ||
    (userTool === "papel" && computerTool === "tijera")
  ) {
    state.innerHTML = "¡Has ganado!";
    indexPlayer++;
    playerCounter.innerHTML = `Jugador:${[indexPlayer]}`;
  } else {
    state.innerHTML = "Has perdido";
    indexComputer++;
    computerCounter.innerHTML = `Computadora: ${[indexComputer]}`;
  }
  if (attempts === 10) {
    button.classList.add("hidden");
    button2.classList.remove("hidden");
  }
}
//Function click button 2
function handleClick2Update() {
  attempts = 0;
  indexPlayer = 0;
  playerCounter.innerHTML = `Jugador: 0`;
  computerCounter.innerHTML = `Computadora: 0`;
  button.classList.remove("hidden");
  button2.classList.add("hidden");
}

//EVENT LISTENER BUTTON
button.addEventListener("click", handleClickUpdate);
button2.addEventListener("click", handleClick2Update);
