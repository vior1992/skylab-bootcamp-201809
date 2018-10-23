import React, { Component } from 'react'




class Favorite extends Component {
    state = { faves: {}, token: sessionStorage.getItem('token'), userId: sessionStorage.getItem('userId') }

    markAsFavorite() {

        let favesLocal = JSON.parse(sessionStorage.getItem('faves'))
        let found = favesLocal.find(element => element.course === this.props.params)
        if (found) return 
        favesLocal.push({course: this.props.params})

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
                sessionStorage.setItem('faves',  JSON.stringify(favesLocal))
                if (res.error) throw Error(res.error)
            })
    }


    render() {
        return <button onClick={() => this.markAsFavorite()}>Favorite</button>
    }
}

export default Favorite