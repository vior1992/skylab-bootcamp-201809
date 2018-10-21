import React, {Component} from 'react'


export default class SideTitle extends Component{

    state = {}

    render() {
        console.log(this.props)
        return (
            
            <section className="panel-inf">
                <section className="panel-inf__main-section">
                    <section className="panel-inf__main-section__img-section">
                        <img src={require("../../assets/img/" + this.props.image)} />    
                    </section>
                    <section className="panel-inf__main-section__name-section">
                        <h1>
                            {this.props.title}
                        </h1>
                    </section>
                </section>
            </section>
        )
      }
}