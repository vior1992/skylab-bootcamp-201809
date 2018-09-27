
/*
    -   BINGO GAME ---------------------------------------------------------
*/

function Bingo() {

    this.userName = 'Guest';
    this.random = 'First card';
    this.completedRows = [];
    this.balls = 0;

    this.generteRandom = () => Math.floor(Math.random() * (1 - 15) + 15);

    this.rand = () => Array.from(Array(5).keys()).map(() => this.generteRandom());

    this.rows = [this.rand(), this.rand(), this.rand()];

    this.getName = () => {
        let name = prompt("Please enter your name");
        if (!name) return this.getName();
        this.userName = name;
    };

    this.table = () => {
        if (this.balls === 0) console.log(`Hola ${this.userName}, ¿Listo para jugar?`);
        this.rows.forEach(row => console.log(`[ ${row.join(' | ')} ] \n`));
        console.log(this.random);
    };

    this.addBall = () => {
        this.random = this.generteRandom();
        this.balls++;
    };

    this.updateRows = () => {
        this.rows.forEach((row, i) => row.forEach((num, j) => {
            (num === this.random) ? this.rows[i][j] = '★' : num;
            if (row.join('') === '★★★★★' && !this.completedRows.includes(i)) {
                this.completedRows.push(i);
                console.log(`LINEA! ===>  fila ${i + 1}`);
            }
        }));
    };

    this.shotNewBall = () => {
        if (this.completedRows.length === 3) {
            console.log(`Fin del juego con un total de: ${this.balls} bolas`);
            if (confirm('¿Quieres volver a jugar?')) return location.reload();
        } else {
            if (confirm('Sacar otra bola')) this.newTable();
        }
    };

    this.newTable = () => {
        this.addBall();
        this.updateRows();
        this.table();
        this.shotNewBall();
    };

}

let bingo = new Bingo();
bingo.getName();
bingo.table();
bingo.shotNewBall();