const random = Math.random();

let fruits;

if (random < 0.10) {
  fruits = "Apple";
}
else if (random >= 0.10 && random < 0.20) {
  fruits = "Banana";
}
else if (random >= 0.20 && random < 0.30) {
  fruits = "Orange";
}
else if (random >= 0.30 && random < 0.40) {
  fruits = "Guava";
}
else if (random >= 0.40 && random < 0.50) {
  fruits = "Peach";
}
else if (random >= 0.50 && random < 0.60) {
  fruits = "Pineapple";
}
else if (random >= 0.60 && random < 0.70) {
  fruits = "Chiku";
}
else if (random >= 0.70 && random < 0.80) {
  fruits = "Grapes";
}
else if (random >= 0.80 && random < 0.90) {
  fruits = "Dragon";
}
else {
  fruits = "Date";
}

function checkGuess() {

  const input = document.getElementById("inputText").value;
  
  const result = document.getElementById("result");
  
  if (input === "") {
    result.innerText = "Please enter a name of fruit!";
  }
  else if (input === fruits) {
    result.innerText = `Correct! The fruit name was ${input}`;
  }
  else {
    result.innerText = "Try again!";
  }
}
