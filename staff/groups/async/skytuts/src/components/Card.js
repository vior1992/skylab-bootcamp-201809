
import { Component } from 'react'
import { Link } from 'react-router-dom'

import defaultData from './default'
import template from './templates/Card.pug';
import Popup from './Popup'

class Card extends Component {
    state = {showPopup: false}
    
    
    togglePopup = () => {
        this.setState({showPopup: !this.state.showPopup})
      } 
    render() {

        const { course, showPopup } = this.props

        let popup = (<Popup text='You need to be logged in to view the courses!' closePopup={this.togglePopup}/>)
        
        return template.call(this, { 
            course,       
            defaultData,
            popup,
             showPopup
            Link
          });
      
    }
}

export default Card
