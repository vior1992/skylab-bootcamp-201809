import React, {Component} from 'react'
import Header from '../../header/header';
import SideTitle from '../../sidetitle/sidetitle';


export default class RightSide extends Component{

    state = {}

    render() {
        return (
    
          <section className="right">
            <Header></Header>
            <SideTitle title="Artists List" image="metallica.png"></SideTitle>
              <section className="right__artists-list">
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
          </section>
        );
      }
}
