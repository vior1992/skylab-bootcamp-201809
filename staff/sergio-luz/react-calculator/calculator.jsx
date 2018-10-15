const root = document.getElementById('root')

function App() {
    return <div >
        <input type="number" />
        <button operation="+">+</button>
        <button operation="-">-</button>
        <button operation="+"></button>
        <button operation="+"></button>
        <input type="number" />
        <input type="result" disabled />
    </div>
}



// function Button(props) {
//     return <button>{props.name}</button>
// }

ReactDOM.render(<App />, root)
// ReactDOM.render(<Button />, root)
// ReactDOM.render(<Button />, root)
// ReactDOM.render(<Button />, root)

