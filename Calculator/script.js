// Get references to the input box and all buttons
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

// Variable to store the input
let input = "";

// Add a click event to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Get the button's text

        if (value === "AC") {
            input = ""; // Clear everything
        } else if (value === "DEL") {
            input = input.slice(0, -1); // Remove the last character
        } else if (value === "=") {
            input = eval(input); // Calculate the result (simple for now)
        } else {
            input += value; // Add the button's text to the input
        }

        inputBox.value = input; // Show the updated input/result
    });
});
