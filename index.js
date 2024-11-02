const buttons = document.querySelectorAll("button");
const inputEl = document.getElementById("ip");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        if (buttonValue === "C") {
            clear();
        } else if (buttonValue === "=") {
            calculate();
        } else {
            appendValue(buttonValue);
        }
    });
});

function clear() {
    inputEl.value = "";
}

function calculate() {
    try {
        inputEl.value = eval(inputEl.value);
    } catch {
        inputEl.value = "Error";
    }
}

function appendValue(value) {
    inputEl.value += value;
}
