import React, { Component } from 'react'
import { Button, Input } from "mdbreact"

class InputForm extends Component {
   state = { query: '' }

   handleInput = event => {
       const query = event.target.value

       this.setState({ query })
   }

   handleSubmit = event => {
       event.preventDefault()

       this.props.onSubmit(this.state.query)

       this.setState({ query: '' })
   }

   render() {
       return <form onSubmit={this.handleSubmit}>
       <div className='container-search'>
       <Input label="Search events" value={this.state.query} onChange={this.handleInput}/>
       <Button type="submit" color="unique">Search</Button>
       </div>
     </form>
   }
}

export default InputForm