import React, { Component } from 'react'


class Register extends Component {


  state = { 
        name: '',
        surname: '',
        username: '',
        password: ''       
  }



  handleSubmit = event => {
      event.preventDefault() 
  }

  handleChangeName = event => {
      const name = event.target.value
      this.setState({ name })
  }

  handleChangeSurname = event => {
    const surname = event.target.value
    this.setState({ surname })
  }

  handleChangeUsername = event => {
    const username = event.target.value
    this.setState({ username })
  }

  handleChangePassword = event => {
    const password = event.target.value
    this.setState({ password })
  }

  render() {
      return  <div>
                <button data-toggle="modal" data-target="#myModal">Register</button>
          
                <div className="modal" id="myModal" role="dialog">
                  <div className="modal-dialog">   
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Registration</h4>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={this.handleSubmit}>
                          <input type="text" placeholder="your name" value={this.state.name} onChange={this.handleChangeName}></input><br></br>
                          <input type="text" placeholder="your surname" value={this.state.surname} onChange={this.handleChangeSurname}></input><br></br>
                          <input placeholder="your username" value={this.state.username} onChange={this.handleChangeUsername}></input ><br></br>
                          <input placeholder="your password" value={this.state.password} onChange={this.handleChangePassword}></input>
                          
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" type="submit">save</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">cancel</button>
                      </div>
                    </div>
                    
                  </div>
                </div>
               
              </div>
      
      
         
  }
}

export default Register;
