function Button(props) {
    return <button onClick={() => props.onClick(props.operation)}>{props.operation}</button>
}


class App extends React.Component {
    state = {
        addText: ""
    }

    render() {
        return <div>
            <h1>Post-It App</h1>
            <form>
                <textarea placeholder="Write text here..."></textarea>
                <Button operation="Post it!" type="submit"></Button>
            </form>
            <section>
                <article></article>
            </section>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))