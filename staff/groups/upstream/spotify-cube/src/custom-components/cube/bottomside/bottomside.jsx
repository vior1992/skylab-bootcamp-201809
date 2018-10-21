import React, {Component} from 'react'
import Register from '../../register/register'
import Header from '../../header/header'

export default class BottomSide extends Component{

    state = {}

    render(){
        return (

            <section className="bottom">
                <div className="rotateX-180">
                    <Header></Header>
                    <Register></Register>
                </div>
            </section>
        );
    }
}
