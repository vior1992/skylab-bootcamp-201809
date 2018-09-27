function calculate() {

    var values = prompt('Enter values separated by a comma.\nIf you enter only one number, you\'ll get its square root.');
    var results = [];

    if (values === "") {
        window.alert('Please enter at least one number');
        setTimeout(calculate, 1000);
    } else {
        var numArray = values.split(",").map(Number);
        var noOperand = numArray.slice(1);

        if (numArray.length === 1) {
            window.alert('The square root of your number is ' + Math.sqrt(numArray).toFixed(2));
        } else {
            function sum(numArray) {
                var acc = 0;
                for (items in numArray) {
                    acc += numArray[items];
                }
                return 'The sum of your numbers is ' + acc;
            }

            function substract(numArray) {
                var total = numArray[0];
                for (var i = 1; i < numArray.length; i++) {
                    total -= numArray[i];
                }
                return 'If you substract ' + noOperand.join(', ').replace(/,([^,]*)$/, ' and$1') + ' from ' + numArray[0] + ', you get ' + total;
            }

            function multiply(numArray) {
                var acc = 1;
                for (items in numArray) {
                    acc *= numArray[items];
                }
                return 'The product of your numbers is ' + acc;
            }

            function divide(numArray) {
                var dividend = numArray[0]
                for (var i = 1; i < numArray.length; i++) {
                    dividend /= numArray[i];
                }
                return 'If you divide ' + numArray[0] + ' between ' + noOperand.join(', ').replace(/,([^,]*)$/, ' and$1') + ', you get ' + dividend.toFixed(3);
            }

            results.push(sum(numArray), substract(numArray), multiply(numArray), divide(numArray));

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
}
calculate();