import React, {Component} from 'react'


export default class Login extends Component{

    state = {}

    render(){
        return (

            
                <form className="custom-form">
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="password" className="form-control" aria-describedby="emailHelp" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
           
        );
    }
}
