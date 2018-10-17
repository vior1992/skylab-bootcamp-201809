import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Article from './components/Articles'
import {storage} from './data'

class App extends Component {
  state = { postits: JSON.parse(storage.getItem('postits'))}

  handleSubmit = text => {
      logic.createPostit(text)

      this.setState({ postits: logic.listPostits() })
  }

  handleDelete = id => {
      
      logic.deletePostit(id)

      this.setState({ postits: logic.listPostits() })
  }

  handleEdit = (newText, id) => {

      
      let postits = JSON.parse(storage.getItem('postits'))
      
      let editPostit = postits.filter(postit => postit.id === id)

      editPostit.text = newText
      
      storage.setItem('postits', JSON.stringify(postits))


  }


  render() {
      return <section> 
          <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
          <InputForm DadSubmit={this.handleSubmit}/>
          <section>  
              {this.state.postits.map(postit => <Article key={postit.id} id={postit.id} postItText={postit.text} DadDelete={this.handleDelete} DadEdit={this.handleEdit}/>)}
          </section> 
      </section>
  }
}

export default App;
