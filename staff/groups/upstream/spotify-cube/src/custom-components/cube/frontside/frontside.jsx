import React, {Component} from 'react'


export class FrontSide extends Comment{

    state = {}

    render(){
        return (

            <section className="front">
            <header className="header">
                <div className="header__logo">
                <img src="./assets/img/logo.png" alt />
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
