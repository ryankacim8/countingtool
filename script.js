let number = 0;
const numberDisplay = document.getElementById('numberDisplay');

function increment() {
    number++;
    updateNumber();
}

function decrement() {
    number--;
    updateNumber();
}

function updateNumber() {
    numberDisplay.textContent = number;
}
