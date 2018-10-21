import React, {Component} from 'react'
import Header from '../../header/header'
import Search from '../../search/search';

export default class FrontSide extends Component{

    state = {}

    render(){
        return (

            <section className="front">

                <Header></Header>
                <Search></Search>

            </section>
        );
    }
}
