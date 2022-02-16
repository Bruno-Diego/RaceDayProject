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