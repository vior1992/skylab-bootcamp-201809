import React, {Component} from 'react'


export default function SideTitle(props){

       
       
        return (
            
            <section className="panel-inf">
                <section className="panel-inf__main-section">
                    <section className="panel-inf__main-section__img-section">
                        <img src={require("../../assets/img/" + props.image)} />    
                    </section>
                    <section className="panel-inf__main-section__name-section">
                        <h1>
                            {props.title}
                        </h1>
                    </section>
                </section>
            </section>
        )
      
}