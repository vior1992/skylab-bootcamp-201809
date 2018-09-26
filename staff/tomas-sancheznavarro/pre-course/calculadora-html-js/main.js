function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var calculate;

    if (operator == "add") {
        calculate = a + b;
    } else if (operator == "min") {
        calculate = a - b;
    } else if (operator == "div") {
        calculate = a / b;
    } else if (operator == "mul") {
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}