// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
// Function to strip leading and trailing spaces from a string
function stripSpaces(inputString) {
    return inputString.trim();
}

// Example usage
const stringWithSpaces = "   Hello, there!   ";
const stringWithoutSpaces = stripSpaces(stringWithSpaces);

console.log(`Original string: "${stringWithSpaces}"`);
console.log(`String without leading and trailing spaces: "${stringWithoutSpaces}"`);
