// functions for all 4 operatiors, done
// function on load to turn the event listerer on, done
// function that has the prevent default and a sorter, mostly done, we need to return a restult
// function that sorts the submit to do the correct operator

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


function calculate(a, b, c) {
  if (c === "add") {
    return add(a, b)
  } else if (c === "subtract") {
    return subtract(a, b)
  } else if (c === "multiply") {
    return multiply(a, b)
  } else if (c === "divide") {
    return divide(a, b)
  }
}


function sorter(event) {
  event.preventDefault();
  const operatorSelection = document.querySelector("input[name='operator']:checked").value;
  const number1 = parseInt(document.querySelector("input[name='number1']").value);
  const number2 = parseInt(document.querySelector("input[name='number2']").value);
  console.log("operator:" + operatorSelection + "input1:" + number1 + "input2: " + number2)
  let result = calculate(number1, number2, operatorSelection)

  document.getElementById("result").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", sorter);
  console.log("page load function worked")
});




