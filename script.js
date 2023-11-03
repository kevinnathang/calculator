"use strict";

const zeroBtn = document.getElementById("zero");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const divBtn = document.getElementById("div");
const mulBtn = document.getElementById("mul");
const resBtn = document.getElementById("res");

addBtn.addEventListener("click", function () {
  oper = "+";
  firstOp = "";
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
subBtn.addEventListener("click", function () {
  oper = "-";
  firstOp = "";
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
divBtn.addEventListener("click", function () {
  oper = "/";
  firstOp = "";
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
mulBtn.addEventListener("click", function () {
  oper = "*";
  firstOp = "";
  operation = firstOp + oper + secondOp;
  console.log(operation);
});

zeroBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += zeroBtn.textContent;
  } else {
    secondOp += zeroBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
oneBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += oneBtn.textContent;
  } else {
    secondOp += oneBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
twoBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += twoBtn.textContent;
  } else {
    secondOp += twoBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
threeBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += threeBtn.textContent;
  } else {
    secondOp += threeBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
fourBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += fourBtn.textContent;
  } else {
    secondOp += fourBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
fiveBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += fiveBtn.textContent;
  } else {
    secondOp += fiveBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
sixBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += sixBtn.textContent;
  } else {
    secondOp += sixBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
sevenBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += sevenBtn.textContent;
  } else {
    secondOp += sevenBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});
eightBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += eightBtn.textContent;
  } else {
    secondOp += eightBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
});

nineBtn.addEventListener("click", function () {
  if (oper === "") {
    firstOp += nineBtn.textContent;
  } else {
    secondOp += nineBtn.textContent;
  }
  operation = firstOp + oper + secondOp;
  console.log(operation);
  console.log(firstOp);
  console.log(oper);
  console.log(secondOp);
});

let firstOp = "";
let oper = "";
let secondOp = "";
let result = "";
let operation = firstOp + oper + secondOp;

const calculate = function () {
  return `${firstOp} ${oper} ${secondOp}`;
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

console.log(operation);
