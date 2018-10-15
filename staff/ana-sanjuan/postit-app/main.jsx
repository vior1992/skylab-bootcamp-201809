function App() {

    return (
    <div>
        <form>
            <textarea placeholder="Write text here..."></textarea>
            <button type="submit">Create</button>
        </form>

        <section>
            <article style="background-color: yellow; width: 100px; height: 100px">My first postit</article>
        </section>
    </div>
    )
}

ReactDOM.render(<App />, root) 
