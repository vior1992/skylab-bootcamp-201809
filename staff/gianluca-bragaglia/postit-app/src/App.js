import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'

class Home extends Component {


  state = { 
          
  }

  

  render() {
      return  <div className="container">
               <h1>Post-It App</h1>
               <Register/><br></br>
               <Login />
              </div>
      
      
         
  }
}

export default Home;




