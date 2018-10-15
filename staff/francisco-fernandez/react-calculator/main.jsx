function App(){
    return <div>
        <input type="number" />
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button> 
        <input type="number" />
        <input type="result" disabled />
    </div>

}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

