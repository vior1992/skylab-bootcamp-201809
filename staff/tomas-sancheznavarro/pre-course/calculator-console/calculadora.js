function calculate() {

    var num1 = prompt('Enter the first value');
    var num2 = prompt('Enter the second value');
    var results = [];

    if (num1 !== "" && num2 === "") {
        window.alert('The square root of your number is ' + Math.sqrt(num1).toFixed(2));
    } else if (num1 === "" && num2 !== "") {
        window.alert('The square root of your number is ' + Math.sqrt(num2).toFixed(2));
    } else {
        function add(num1, num2) {
            return 'When you add ' + Number(num1) + ' and ' + Number(num2) + ', you get: ' + (Number(num1) + Number(num2));
        }

        function substract(num1, num2) {
            return 'When you substract ' + Number(num1) + ' from ' + Number(num2) + ', you get: ' + (Number(num1) - Number(num2));
        }

        function div(num1, num2) {
            return 'When you divide ' + num1 + ' between ' + num2 + ', you get: ' + (num1 / num2).toFixed(2);
        }

        function multiply(num1, num2) {
            return 'When you multiply ' + num1 + ' and ' + num2 + ', you get: ' + (num1 * num2);
        }

        results.push(add(num1, num2), substract(num1, num2), multiply(num1, num2), div(num1, num2));

        results.forEach(function (element) {
            console.log(element);
        });
    }

    function replay() {
        var answer = prompt("New numbers? y/n")
        if (answer === 'y' || answer === 'Y') {
            calculate();
        } else {
            if (answer === 'n' || answer === 'N') {
                window.alert('Bye!');
            }
        }
    }
    setTimeout(replay, 3000);
}
calculate();