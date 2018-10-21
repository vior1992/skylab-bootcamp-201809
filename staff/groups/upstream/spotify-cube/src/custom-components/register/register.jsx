import React, {Component} from 'react'


export default class Register extends Component{

    state = {}

    render(){
        return (
            
                <form className="custom-form">
                    <div className="form-group">
                        
                        <input type="text"  className="form-control"  placeholder="Name" />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" className="form-control"  placeholder="Surname" />
                    </div>
                    <div className="form-group">
                       
                        <input type="email" className="form-control"  placeholder="Email" />
                    </div>
                   <div className="form-group">
                      
                        <input type="text" className="form-control"  placeholder="Username" />
                    </div>
                    <div className="form-group">
                       
                        <input type="password" className="form-control"  placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

           
        );
    }
}
