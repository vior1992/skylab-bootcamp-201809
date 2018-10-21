import React, {Component} from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'

export default class BackSide extends Component{

    state = {}

    render() {
        return (
    
          <section className="back">
            <div className = "rotateY-180">
              <Header></Header>
              <SideTitle title="Albums list" image ="metallica.png"></SideTitle>
              <section className="back__albums-list">
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
        )
      }
}