import React, {Component} from 'react'


export default class Header extends Component{

    state = {}

    render(){
        return (
            
            <header className="header">
                <div className="header__logo">
                    <img src={require('../../assets/img/logo.png')} />
                </div>
                <audio className="header__audio" controls autoPlay ></audio>
            </header>

           
        );
    }
}
