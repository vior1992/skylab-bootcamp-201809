import React, { Component } from 'react'
import logic from '../logic'
import Post from './Post'

class Home extends Component {


  state = { 
          postits: logic.listPostits(),
          text: '',
          idUser: ''
  }

  handleChange = event => {
      
      const text = event.target.value

      this.setState({ text })

  }
  
  
  handleSubmit = event => { 
      event.preventDefault()   

      logic.createPostit(this.state.text)

      this.setState({ postits: logic.listPostits() })

      this.setState({text: ''})

  }


  handleDeletePost = id => {  
      
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostits() })        
     
  }

  handleUpdatePost = (id, text) => {
      logic.updatePostit(id, text)

      this.setState({ postits: logic.listPostits() })
  }


  render() {
      return <div className="container">
          <h1>Post-It App</h1>
          <form onSubmit={this.handleSubmit}>
              <textarea placeholder="Write text here..." type="text" onChange={this.handleChange} value={this.state.text} /><br></br>
              <button className="button" type="submit">Create</button>
          </form>
          <div className="posts-container">
          {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
          </div>
         
                     
      </div>
  }
}

export default Home;

