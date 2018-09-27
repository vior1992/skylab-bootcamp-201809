var airline_form = document.querySelector('#airline_form');
var airline_welcome = document.querySelector('#airline_welcome');
var airline_table = document.querySelector('#airline_table');
var airline_cost = document.querySelector('#airline_cost');
var airline_latest = document.querySelector('#airline_latest');
var airline_new = document.querySelector('#airline_new');
var airline_filter_type = document.querySelector('#airline_filter_type');
var airline_filter_value = document.querySelector('#airline_filter_value');
var newFlightWindow, username, role, filter_type = 0, filter_value = null;
var flight = [
    {id: 0, from: "Barcelona", to: "New York", cost: 700, scale: false},
    {id: 1, from: "Madrid",to: "Los Angeles", cost: 1100, scale: true},
    {id: 2, from: "Barcelona", to: "Paris", cost: 210, scale: false},
    {id: 3, from: "Barcelona", to: "Roma", cost: 150, scale: false},
    {id: 4, from: "Madrid", to: "London", cost: 200, scale: false},
    {id: 5, from: "Barcelona", to: "Madrid", cost: 90, scale: false},
    {id: 6, from: "Madrid", to: "Tokyo", cost: 1500, scale: true},
    {id: 7, from: "Barcelona", to: "Shangai", cost: 800, scale: true},
    {id: 8, from: "Barcelona", to: "Sydney", cost: 150, scale: true},
    {id: 9, from: "Madrid", to: "Tel-Aviv", cost: 150, scale: false}
];

function filter(cost) {
    var result = true;
    if (filter_value) {
        switch (filter_type) {
            case 0:
                result = cost === filter_value;
                break;
            case 1:
                result = cost >= filter_value;
                break;
            case 2:
                result = cost <= filter_value;
                break;
        }
    }
    return result;
}

function buyFlight(id) {
    if (confirm('Estas segur de voler comprar aquest vol?')) {
        alert('Gràcies per la seva compra, torni aviat!');
        changeTab(2, 1);
    }
}

function removeFlight(id) {
    if (confirm('Estas segur de voler eliminar aquest vol?')) {
        if (selected = findById(flight, id)) {
            flight.splice(selected.id, 1);
            printTable();
            averageCost();
            latestDestinies();
        }
    }
}

function printTable() {
    // Create table body
    var tbody = airline_table.querySelector('tbody');
    if (tbody == null) {
        tbody = document.createElement('tbody');
        airline_table.appendChild(tbody);
    } else {
        tbody.innerHTML = '';
    }

    // Print array info into rows
    for (var i in flight) {
        if (filter(flight[i].cost)) {
            var tr = document.createElement('tr');
            tr.id = flight[i].id;
            for (var j in flight[i]) {
                if (['id'].indexOf(j)) {
                    var td = document.createElement('td');
                    switch (j) {
                        case 'cost':
                            td.innerHTML = flight[i][j] + '€';
                            break;
                        case 'scale':
                            td.innerHTML = flight[i][j] ? 'Sí' : 'No';
                            break;
                        default:
                            td.innerHTML = flight[i][j];
                            break;
                    }
                    tr.appendChild(td);
                }
            }

            // Print actions row
            var td = document.createElement('td');
            if (['admin'].indexOf(role) > -1) {
                td.style.padding = '0.5rem';
                td.innerHTML = '<button class="btn btn-danger btn-sm" onclick="removeFlight('+tr.id+')">Eliminar</button>';
            } else {
                td.style.padding = '0.5rem';
                td.innerHTML = '<button class="btn btn-primary btn-sm" onclick="buyFlight('+tr.id+')">Comprar</button>';
            }
            tr.appendChild(td);

            tbody.appendChild(tr);
        }
    }
}

function averageCost() {
    var total = 0;
    for (var i in flight) {
        total += flight[i].cost;
    }
    airline_cost.innerHTML = Math.round(total / flight.length) + '.-';
}

function latestDestinies() {
    airline_latest.innerHTML = '';
    var latest = flight.slice(-5);
    for (var i in latest) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = latest[i].to;
        airline_latest.appendChild(li);
    }
}

airline_form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validate(airline_form, ['username'])) {
        username = airline_form.querySelector('input[name="username"]').value;
        role = airline_form.querySelector('input[name="role"]:checked').value;
        changeTab(1, 2, function() {
            airline_welcome.innerHTML = 'Benvingut <strong>' + username + '</strong>!';
            if (['admin'].indexOf(role) > -1) airline_new.classList.remove('d-none');
            printTable();
            averageCost();
            latestDestinies();
        });
    }
});

airline_new.addEventListener('click', function(event) {
    if (flight.length < 15) {
        createNewFlightWindow();
    } else {
        alert('No es poden crear més de 15 vols');
    }
});

airline_filter_type.addEventListener('change', function(event) {
    filter_type = parseInt(event.target.value);
    printTable();
});

airline_filter_value.addEventListener('keyup', function(event) {
    filter_value = event.target.value ? parseInt(event.target.value) : null;
    printTable();
});

// New flight window
function createNewFlightWindow(){
    newFlightWindow = new BrowserWindow({
        width: 360,
        height: 460,
    });

    // Load html into window
    newFlightWindow.loadURL('src://renderer/html/newFlight.html');

    // Memory saver
    newFlightWindow.on('close', function() {
        newFlightWindow = null;
    });
}

// Add flight
ipcMain.on('item:add', function(event, item) {
    var new_flight = {id: flight[flight.length - 1].id + 1};
    new_flight.from = item.from;
    new_flight.to = item.to;
    new_flight.cost = parseInt(item.cost);
    new_flight.scale = item.scale;
    flight.push(new_flight);
    printTable();
    averageCost();
    latestDestinies();
    newFlightWindow.close();
});
