import React, {Component} from 'react'
import FrontSide from './frontside/frontside'
import BackSide from './backside/backside'
import BottomSide from './bottomside/bottomside'
import TopSide from './topside/topside'
import RightSide from './rightside/rightside'
import LeftSide from './leftside/leftside'
import $ from 'jquery'

export default class Cube extends Component{

    state = { session: {} } 

    constructor(props){

        super(props)
        this.xdeg = 0
        this.face = "front"
        document.addEventListener("keypress", this.cubeControler)
    }

    cubeControler = (ev) => {

            switch(ev.keyCode){

                case 87,119:  //UP
                    switch(this.face){

                        case "front":
                            this.addRotation("rotateX--90")
                            this.face = "top"
                        break;
                        case "bottom":
                            this.addRotation("rotateX-0")
                            this.face = "front"
                        break;
                    }
                break;

                case 83,115:  //DOWN
                    switch(this.face){

                        case "front":
                            this.addRotation("rotateX-90")
                            this.face = "bottom"
                        break;
                        case "top":
                            this.addRotation("rotateX-0")
                            this.face = "front"
                        break;
                    
                    }
                break;

                case 100: //LEFT
                    switch(this.face){

                        case "front":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "right"
                        break;
                        case "left":
                            this.xdeg = 0
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "front"
                        break;
                        case "right":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "back"
                        break;
                        case "back":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "left"
                        break;
                    }
                break;

                case 97: //RIGHT
                    switch(this.face){

                        case "front":
                            this.xdeg += 90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "left"
                        break;
                        case "left":
                            this.xdeg += 90    
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "back"
                        break;
                        case "right":
                            this.xdeg = 0
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "front"
                        break;
                        case "back":
                            this.xdeg += 90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "right"
                        break;
                    }
                break;

        }
        
    }

    addRotation = (_class) => {

        this.setState({rotationClass:_class});
      
    }

    render(){

        return <section className="container">
            <section className={`cube ${this.state.rotationClass}`}>

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