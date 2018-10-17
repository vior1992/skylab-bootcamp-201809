import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Post from './components/Post'
import Popup from './components/Popup'
import Register from './components/Register'


class App extends Component {
  state = {
       postits: logic.listPostits(),
       users: logic.listUsers(),
       showPopup: false,
   }

  handleSubmit = text => {
      logic.createPostit(text)
      
      this.setState({ postits: logic.listPostits() })
  }

  handleDeletePost = id => {
      
      logic.deletePostit(id)

      this.setState({ postits : logic.listPostits(),
      showPopup :false })
  }

  handleUpdatePost = (id, text) => {
      logic.updatePost(id, text)

      this.setState({postits : logic.listPostits(),
      showPopup : false})
  }

  togglePopup = (id) => {
     
      this.setState({
          showPopup : !this.state.showPopup,
          clickedID : id
      })
  }

  registerSubmit = (name, email, username, password) => {
      logic.createUser(name, email, username, password)
      this.setState({ users: logic.listUsers() })
  }



  render() {

      return <div className="container">
      <h1>Post it App</h1>
      {/* { <InputForm onSubmit = {this.handleSubmit} />
      <div className="test">
      {this.state.postits.map( postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost = {this.handleDeletePost} editing = {this.state.showPopup} popup = {this.togglePopup} complete={this.updateCompleted} completeState={this.state.completed} clickID={this.state.clickedID} />)}
      {this.state.postits.map(postit => (this.state.showPopup && postit.id===this.state.clickedID) ? <Popup onUpdate={this.handleUpdatePost} key={postit.id} id={postit.id} text={postit.text}/> : null)}
      </div> } */}
      <Register onSubmitRegister={this.registerSubmit}/>
      </div>

  }
}

export default App;
