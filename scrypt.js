/*
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let runnerAge = 18;
if(runnerAge > 18 && earlyRunner){
  raceNumber += 1000
  console.log(`Your race will start at 9:30 am and your number is ${raceNumber}.`)
} else if (runnerAge > 18 && !earlyRunner) {
  console.log(`Your race will start at 11:00 am and your number is ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`Your race will start at 12:30 pm and your number is ${raceNumber}.`)
} else {
  console.log(`Please go to the registration desk.`)
}
*/

function early() {
  let raceNumber = Math.floor(Math.random() * 1000);
  let earlyRunner = true;
  let runnerAge = document.getElementById("age").value;
  let newText = document.createElement("h2");
  let result = true;
  if (runnerAge > 18 && earlyRunner) {
    raceNumber += 1000;
    result = document.createTextNode(
      `Your race will start at 9:30 am and your number is ${raceNumber}.`
    );
  } else if (runnerAge > 18 && !earlyRunner) {
    result = document.createTextNode(
      `Your race will start at 11:00 am and your number is ${raceNumber}.`
    );
  } else if (runnerAge < 18) {
    result = document.createTextNode(
      `Your race will start at 12:30 pm and your number is ${raceNumber}.`
    );
  } else {
    result = document.createTextNode(`Please go to the registration desk.`);
  }
  newText.appendChild(result);
  let currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText);
}

function later() {
  let raceNumber = Math.floor(Math.random() * 1000);
  let earlyRunner = false;
  let runnerAge = document.getElementById("age").value;
  let newText = document.createElement("h2");
  let result = true;
  if (runnerAge > 18 && earlyRunner) {
    raceNumber += 1000;
    result = document.createTextNode(
      `Your race will start at 9:30 am and your number is ${raceNumber}.`
    );
  } else if (runnerAge > 18 && !earlyRunner) {
    result = document.createTextNode(
      `Your race will start at 11:00 am and your number is ${raceNumber}.`
    );
  } else if (runnerAge < 18) {
    result = document.createTextNode(
      `Your race will start at 12:30 pm and your number is ${raceNumber}.`
    );
  } else {
    result = document.createTextNode(`Please go to the registration desk.`);
  }
  newText.appendChild(result);
  let currentDiv = document.getElementById("div-result");
  currentDiv.appendChild(newText);
}
