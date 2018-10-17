import React, {Component} from 'react'

class Register extends Component {

    state = {}


    HandleSaveUser = (event) => {
        const userData = event.target.value

        

    }

    render(){
        <form OnSubmit={this.HandleSaveUser}>
            <input placeholder={'Name'} value ></input>
            <button type='Submit'>Submit</button>
        </form>
    }





}