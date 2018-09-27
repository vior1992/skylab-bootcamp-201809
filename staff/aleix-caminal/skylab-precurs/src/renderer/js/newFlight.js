const electron = require('electron');
const {ipcRenderer} = electron;
const add_flight = document.querySelector('#add_flight');

add_flight.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validate(add_flight, ['from', 'to', 'cost'])) {
        var flight = {};
        flight.from = add_flight.querySelector('input[name="from"]').value;
        flight.to = add_flight.querySelector('input[name="to"]').value;
        flight.cost = add_flight.querySelector('input[name="cost"]').value;
        flight.scale = add_flight.querySelector('input[name="scale"]').checked;
        console.log(flight);
        ipcRenderer.send('item:add', flight);
    }
});
