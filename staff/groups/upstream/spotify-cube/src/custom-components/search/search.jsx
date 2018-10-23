import React, {Component} from 'react'
import $ from 'jquery'

export default class Search extends Component{

    state = {}

   

    handleChange = (ev) =>{

        this.value = ev.target.value

    }

    handleSearch = (ev) => {
        ev.preventDefault();
       
        this.props.onSearch(this.value)

    }

    render(){
        return (
            
                <form className="custom-form" onSubmit = {this.handleSearch}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Artits</label>
                        <input onChange={ this.handleChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search Artits..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Search Artits</button>
                </form>
           
        );
    }
}
