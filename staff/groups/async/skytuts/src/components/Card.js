
import { Component } from 'react'
import { Link } from 'react-router-dom'

import defaultData from './default'
import template from './templates/Card.pug';

class Card extends Component {

    render() {

        const { course } = this.props
    
        return template.call(this, { 
            course,       
            defaultData,
            Link
          });

    }
}

export default Card
