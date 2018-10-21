import React, {Component} from 'react'


export default class Search extends Component{

    state = {}

    render(){
        return (

            
                <form className="custom-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Artits</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search Artits..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Search Artits</button>
                </form>
           
        );
    }
}
