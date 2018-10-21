import React, {Component} from 'react'
import Login from '../../login/login';
import Header from '../../header/header'

export default class TopSide extends Component{

    state = {}

    render(){
        return (
            <section className="top">
                <Header></Header>
                <Login></Login>
           </section>
        );
    }
}
