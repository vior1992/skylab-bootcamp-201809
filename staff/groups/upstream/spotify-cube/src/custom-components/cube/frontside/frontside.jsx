import React, {Component} from 'react'
import Header from '../../header/header'
import Search from '../../search/search';

export default class FrontSide extends Component{

    state = {}

    constructor(props){
        super(props)
    }

   
    render(){
       
        return (

            <section className="front">
                <Header ></Header>
                <Search></Search>
            </section>
        );
    }
}
