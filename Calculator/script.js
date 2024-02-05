const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");

function display(value) {
    input.value += value;
    return value;
}

function solve() {
    if (input.value !== "") {
        let val = input.value;
        let result = eval(val);
        input.value = result;
        return result;
    }
}

function clearInput() {
    input.value = "";
}