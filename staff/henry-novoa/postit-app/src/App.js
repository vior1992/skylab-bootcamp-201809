import React, { Component } from 'react';


class Register extends Component{
    state = { name:'', username:'',password:''}

    render(){
        return <form>
            <input type='text' placeholder='name'></input>
            <input type='text' placeholder='name'></input>
            <input type='text' placeholder='name'></input>
        </form>
    }
}



class App extends Component {
    
    state ={ register: false }



    handleRegister =()=>{

    }

    
    render (){
        return <section className='App' >
                {!this.state.register && <section className='landing'>
                <h2 className='title'>Choose an option</h2>
                <button className='button' onClick={this.handleLogin}>Login</button>
                <button className='button' onClick={this.handleRegister}>Register</button>
                </section>}
                {this.state.register && <Register />}
                {/* <Login />
                <Register />
                <Home></Home> */}


        </section>
    }

}

export default App