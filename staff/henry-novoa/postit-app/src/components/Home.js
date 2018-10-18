import React, { Component } from 'react';
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Home extends Component {
  state = { postits: logic.listPostitsByUser(this.props.userId) }

  handleSubmit = text => {
      console.log('App', 'handleSubmit (setState)')
      
      

      logic.createPostit(text, this.props.userId)

      this.setState({ postits: logic.listPostitsByUser(this.props.userId) })
  }

  handleDeletePost = id => {
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostits() })
  }
  handleEditPost = (id) =>{
      
      logic.editPost(id)

      this.setState({ postits: logic.listPostits() })
  }

  handleLogout = () => {

        this.props.onLogout() 
  }

  render() {
      console.log('App', 'render')

      return <div>
          <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>

          <InputForm onSubmit={this.handleSubmit} />
          <button onClick={this.handleLogout}>Log out</button>  
          <section>
              {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
              {this.state.postits.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost={this.handleDeletePost} onEditPost={()=>this.handleEditPost(postit.id)} />)}
          </section>
      </div>
  }
}

export default Home

//ReactDOM.render(<App />, document.getElementById('root'))

