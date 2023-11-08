"use strict";

const resBtn = document.getElementById("res");
const resDisplay = document.getElementById("resultDisplay");
const operDisplay = document.getElementById("operationDisplay");

let firstOp = "";
let oper = "";
let secondOp = "";
let result = "";
let digitQuant = 0;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "/":
      return div(a, b);
    case "*":
      return mul(a, b);
    default:
      return "Invalid operator";
  }
}

const numbersBtns = document.querySelectorAll(".numbers");
numbersBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (digitQuant < 12) {
      if (oper === "") {
        digitQuant++;
        firstOp += this.textContent;
        operDisplay.textContent += this.textContent;
      } else {
        digitQuant++;
        secondOp += this.textContent;
        operDisplay.textContent += this.textContent;
      }
    }
  });
});

const operBtns = document.querySelectorAll(".operators");
operBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (digitQuant < 12) {
      digitQuant++;
      oper = this.textContent;
      operDisplay.textContent += this.textContent;
    }
  });
});

resBtn.addEventListener("click", function () {
  result = calculate(parseFloat(firstOp), parseFloat(secondOp), oper);
  result = result.toFixed(2);
  firstOp = result;
  resDisplay.textContent = result;
  operDisplay.textContent = "";
  secondOp = "";
  digitQuant = 0;
  console.log(result);
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  resDisplay.textContent = "";
  operDisplay.textContent = "";
  firstOp = "";
  secondOp = "";
  result = "";
  oper = "";
  digitQuant = 0;
});
