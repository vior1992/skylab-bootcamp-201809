import React, {Component} from 'react'


export default class FrontSide extends Component{

    state = {}

    render(){
        return (

            <section className="front">
            <header className="header">
                <div className="header__logo">
                <img src="../../../assets/img/logo.svg" alt="logo" />
                </div>
            </header>
            <form className="front__search-form">
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Artist</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Artis Name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </section>
        );
    }
}
