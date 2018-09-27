var calculator_inputs = document.querySelector('#calculator_inputs');
var calculator_buttons = document.querySelector('#calculator_buttons');
var calculator_id = 1;

newCalc();
function newCalc() {
    calculator_buttons.classList.add('d-none');
    calculator_inputs.insertAdjacentHTML('beforeend', '<div class="form-group">'+
        '<label for="numbers'+calculator_id+'">Operació #'+calculator_id+'</label>'+
        '<input id="numbers'+calculator_id+'" type="text" class="form-control" placeholder="Separats per comes">'+
    '</div>'+
    '<button id="submit'+calculator_id+'" class="btn btn-primary float-right" onclick="submit('+calculator_id+')">Resultats</button>'+
    '<div id="results'+calculator_id+'" class="container"></div>');
    calculator_id++;
}

function submit(id) {
    var input = calculator_inputs.querySelector('#numbers'+id);
    var result = calculator_inputs.querySelector('#results'+id);
    var numbers = input.value.split(",").filter(function(item){
        return isNumeric(item);
    }).map(function(item) {
        return item.trim();
    });

    result.innerHTML = '';
    if (results = calculate(numbers)) {
        input.readOnly = true;
        var keys = Object.keys(results);
        for (var i = 0; i < keys.length; i++) {
            var p = document.createElement('p');
            switch (keys[i]) {
                case 'sum':
                    p.innerHTML = 'Suma: ' + results['sum'];
                    break;
                case 'sub':
                    p.innerHTML = 'Resta: ' + results['sub'];
                    break;
                case 'mul':
                    p.innerHTML = 'Producte: ' + results['mul'];
                    break;
                case 'div':
                    p.innerHTML = 'Quocient: ' + results['div'];
                    break;
                case 'sqrt':
                    p.innerHTML = 'Arrel quadrada: ' + results['sqrt'];
                    break;
            }
            result.appendChild(p);
        }

        calculator_inputs.querySelector('#submit'+id).remove();
        calculator_buttons.classList.remove('d-none');
    } else {
        var p = document.createElement('p');
        p.innerHTML = 'S\'ha d\'instertar algún número!';
        result.appendChild(p);
    }
}

function calculate(numbers) {
    var first = parseFloat(numbers[0]);
    numbers.shift();

    let results = 0;
    if (!isNaN(first)) {
        if (numbers.length) {
            let sum = first, sub = first, mul = first, div = first;
            for (i in numbers) {
                sum += parseFloat(numbers[i]);
                sub -= parseFloat(numbers[i]);
                mul *= parseFloat(numbers[i]);
                div /= parseFloat(numbers[i]);
            }

            results = {
                sum: round(sum),
                sub: round(sub),
                mul: round(mul),
                div: round(div)
            };
        } else {
            results = {
                sqrt: round(Math.sqrt(first))
            };
        }
    }

    return results;
}
