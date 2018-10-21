import React, {Component} from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'

export default class LeftSide extends Component{

    render() {
        return (
    
          <section className="left">
          <div className="rotateY--180">
          <Header></Header>
            <SideTitle image="metallica.png" title="Track List"></SideTitle>
            <section className="left__albums-list">
              <ul className="list">
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
                <li><a href="#">lorem ipsum jajajaja</a></li>
              </ul>
            </section>
          </div>
            
          </section>
        );
      }
}