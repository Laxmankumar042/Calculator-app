let inputField = document.querySelector(".input-field");
let numberBtn = document.querySelectorAll(".number-btn");
let equalBtn = document.getElementById("equal-btn");
let clearBtn = document.getElementById("clear-btn");
let delBtn = document.getElementById("del-btn");
let string = "";

delBtn.addEventListener("click", () => {
  inputField.value = inputField.value.slice(0, -1);
  string = inputField.value;
});
numberBtn.forEach((value) => {
  value.addEventListener("click", (e) => {
    string += e.target.innerHTML;
    inputField.value = string;
  });
});

clearBtn.addEventListener("click", () => {
  string = "";
  inputField.value = string;
});

equalBtn.addEventListener("click", () => {
  inputField.value = eval(string);
});
