import React, {Component} from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list';

export default class LeftSide extends Component{

    render() {
        return (
    
          <section className="left">
            <div className="rotateY--180">
              <Header showPlayer = {true}></Header>
                <SideTitle image="metallica.png" title="Track List"></SideTitle>
                <List></List>
            </div>
            
          </section>
        );
      }
}