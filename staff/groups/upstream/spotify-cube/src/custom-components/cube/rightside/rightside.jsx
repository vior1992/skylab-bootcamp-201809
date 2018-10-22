import React, {Component} from 'react'
import Header from '../../header/header';
import SideTitle from '../../sidetitle/sidetitle';
import List from '../../list/list';


export default class RightSide extends Component{

    state = {}

    render() {
        return (
    
          <section className="right">
            <Header></Header>
            <SideTitle title="Artists List" image="metallica.png"></SideTitle>
              <List></List>
          </section>
        );
      }
}
