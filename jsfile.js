

var screen = document.getElementById("result");
function clearScreen() {
  screen.value = " ";
}

// This function display values
function display(value) {

  screen.value += value;
}
// This function evaluates the expression and return result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
