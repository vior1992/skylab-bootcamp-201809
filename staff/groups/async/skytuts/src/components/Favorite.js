import React, { Component } from 'react'




class Favorite extends Component {
    state = {
        faves: {},
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        status: ''
    }

    checkStatus() {
        let favesLocal = JSON.parse(sessionStorage.getItem('faves'))
        let found = favesLocal.find(element => element.course === this.props.params)
        const status = (found) ? 'Unfavorite' : 'Mark As Favorite'
        this.setState({ status })
    }

    componentWillMount() {
        this.checkStatus()
    }

    markAsFavorite() {

        let favesLocal = JSON.parse(sessionStorage.getItem('faves'))
        let found = favesLocal.find(element => element.course === this.props.params)
        if (found) {
            favesLocal = favesLocal.filter(element => element.course !== this.props.params)
        } else {
            favesLocal.push({ course: this.props.params })
        }


        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this.state.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this.state.token}`
            },
            body: JSON.stringify({ faves: favesLocal })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                sessionStorage.setItem('faves', JSON.stringify(favesLocal))
                this.checkStatus()
            })
    }


    render() {
        return <button onClick={() => this.markAsFavorite()}>{this.state.status}</button>
    }
}

export default Favorite