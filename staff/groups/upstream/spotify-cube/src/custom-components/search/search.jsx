import React, {Component} from 'react'

export default class Search extends Component{

    state = {search:""}


    handleChange = (ev) =>{

        this.setState({search:ev.target.value}) 
    }

    handleSearch = (ev) => {
        ev.preventDefault();
       
        this.props.onSearch(this.state.search)

    }

    handleClearSearch = () =>{

        this.setState({search:""}) 
        this.props.onClearSearch();

    }

    render(){
        return (
            
                <form className="custom-form" onSubmit = {this.handleSearch}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search Artits</label>
                        <input onChange={ this.handleChange} value={this.state.search} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search Artits..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Search Artits</button>
                    <button onClick={this.handleClearSearch} type="button" className="btn btn-primary">Clear search</button>
                </form>
           
        );
    }
}
