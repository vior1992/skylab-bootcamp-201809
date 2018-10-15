class PostItApp extends React.Component {
  state = {
    items: [],
    text: ''
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Post-it App</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <textarea className="form-control" rows="3" placeholder="Write something..." onChange={this.handleChange}>{this.state.text}</textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Create a Post-it</button>
          </form>
          <PostItList items={this.state.items} />
        </div>
      </div>
    )
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.text.length) {
      return
    }

    const newItem = {
      text: this.state.text
    }

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }
}

class PostItList extends React.Component {
  render() {
    return (
      <div className="post-it">
        {this.props.items.map(item => (
          <div className="alert alert-warning" role="alert">{item.text}</div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(<PostItApp />, document.getElementById('root'));