const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the Color of traffic light: ', (color) => traffic(color));

function traffic(color) {
  if (color == "red") {
    console.log("Red: STOP");
  } else if (color == "yellow") {
    console.log("Yellow: SLOW DOWN");
  } else if (color == "green") {
    console.log("Green: GO");
  } else {
    console.log("Enter a valid color (red, yellow, green)");
  }
  
  rl.close(); // Close the readline interface after processing the input
}
