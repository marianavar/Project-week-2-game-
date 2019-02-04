const rs = require("readline-sync");

const response = rs.question('what is your name?');

console.log(response);

console.log(`Hello ${response} Welcome to the forest temple!`);

const yesNo = require("readline-sync");
const animal = yesNo.question("Want to know your spirit animal?(yes/no)");
  if (animal == "yes") {

  console.log ("Your Spirit animal will only be identified as you roll and meditate")

      const roll =  yesNo.question("Ready to Roll?(yes/no)")
    if (roll == "yes") {

            let animalsArray = ['Fish','Duck','Bear','Eagle','Rabbit','Wolf'];

            let choice = getRandom(animalsArray);

                console.log(`${response} You are a ${choice}!`)}
   else if (roll = "no"){
     console.log("Goodbye")}
     else {console.warn("*Sorry, I did not understand that.");
   }

  }
  else if (animal == "no"){
    console.log("You are just a simple human, Take care of the forest, Goodbye!");
  }
  else{console.warn("*Sorry, I did not understand that.");
}
console.log(animal);




// HELPER FUNCTIONS

// Helper function to select randomly from array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}
