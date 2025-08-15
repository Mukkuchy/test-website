// Change background color
function changeBg(color) {
    document.body.style.backgroundColor = color;
}

// Greet the user
function greetUser() {
    const name = document.getElementById("nameInput").value;
    const greeting = name ? `Hello, ${name}! 👋` : "Please enter your name!";
    document.getElementById("greetingText").innerText = greeting;
}

// Counter logic
let counter = 0;

function updateCounter(value) {
    counter += value;
    document.getElementById("counterValue").innerText = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counterValue").innerText = counter;
}
