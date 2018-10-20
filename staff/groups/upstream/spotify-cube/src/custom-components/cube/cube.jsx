import React, {Component} from 'react'
import {FrontSide} from './frontside/frontside'
import {BackSide} from './frontside/frontside'
import {BottomSide} from './frontside/frontside'
import {TopSide} from './frontside/frontside'
import {RightSide} from './frontside/frontside'
import {LeftSide} from './frontside/frontside'

export class Cube extends Component{

    state = {}

    render(){

        return <section class="container">
            <section id="cube">
                <FrontSide></FrontSide>
                <BackSide></BackSide>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
                <TopSide></TopSide>
                <BottomSide></BottomSide>    
            </section>
        </section>
            
    }
}