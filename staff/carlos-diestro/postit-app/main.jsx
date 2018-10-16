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
              <textarea className="form-control" rows="3" autoFocus placeholder="Write something..." onChange={this.handleChange} value={this.state.text}></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Create a Post-it</button>
          </form>
          <PostItList items={this.state.items} onRemoveItem={this.handleRemoveItem} />
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
      items: [...state.items, newItem],
      text: ''
    }))

    event.currentTarget[0].focus()
  }

  handleRemoveItem = index => {
    this.setState({
      items: this.state.items.filter((item, itemIndex) => itemIndex !== index)
    })
  }
  
  // Capture event
  // handleRemoveItem = event => {
  //   console.log(event.nativeEvent)
  // }
}

const PostItList = props => {
  return (
    <div className="post-it my-3">
      <div className="row">
        {props.items.map((item, index) => (
          <div className="col-sm-12 col-md-6">
            <div className="alert alert-warning alert-dismissible fade show" key={index}>
              {item.text}
              {/* Send event 
              <button data-id={index} type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.onRemoveItem}></button> */}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => props.onRemoveItem(index)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<PostItApp />, document.getElementById('root'));