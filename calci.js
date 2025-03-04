function display(value) {
    document.getElementById("display").value += value;
  }
  
  function calculator() {
    let result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
  }
  function clearDisplay() {
    document.getElementById("display").value = "";
}