import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Postits extends Component {
    state = { postits: [], todo: [], doing: [], review: [], done: [] }

    componentDidMount() {
        logic.listPostits()
            .then(postits => { this.setState({ postits }) })

            .then(() => {
                
                const todo = this.state.postits.filter(post => post.status === "TODO")
                const doing = this.state.postits.filter(post => post.status === "DOING")
                const review = this.state.postits.filter(post => post.status === "REVIEW")
                const done = this.state.postits.filter(post => post.status === "DONE")

                this.setState({ todo, doing, review, done }) 
                
            })
        // TODO error handling!
    }

    handleSubmit = text => {
        try {
            logic.addPostit(text)
                .then(() => logic.listPostits())
                .then(postits => this.setState({ postits }))

                .then(() => {
                
                    const todo = this.state.postits.filter(post => post.status === "TODO")
                    const doing = this.state.postits.filter(post => post.status === "DOING")
                    const review = this.state.postits.filter(post => post.status === "REVIEW")
                    const done = this.state.postits.filter(post => post.status === "DONE")
    
                    this.setState({ todo, doing, review, done }) 
                })

        } catch ({ message }) {
            alert(message) // HORROR! FORBIDDEN! ACHTUNG!
        }
    }

    // TODO error handling!

    handleRemovePostit = id =>
        logic.removePostit(id)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
            .then(() => {
                
                const todo = this.state.postits.filter(post => post.status === "TODO")
                const doing = this.state.postits.filter(post => post.status === "DOING")
                const review = this.state.postits.filter(post => post.status === "REVIEW")
                const done = this.state.postits.filter(post => post.status === "DONE")

                this.setState({ todo, doing, review, done }) 
                
            })

    // TODO error handling!


    handleModifyPostit = (id, text) =>
        logic.modifyPostit(id, text)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))

    // TODO error handling!

    handleChangeStatus = (id, status) => {
        logic.changeStatus(id, status)
           .then(() => logic.listPostits())
           .then(postits => this.setState( { postits }))
           .then(() => {
                
                const todo = this.state.postits.filter(post => post.status === "TODO")
                const doing = this.state.postits.filter(post => post.status === "DOING")
                const review = this.state.postits.filter(post => post.status === "REVIEW")
                const done = this.state.postits.filter(post => post.status === "DONE")

                this.setState({ todo, doing, review, done }) 
                
            })

    }

    render() {
        return <div>
            <div className="header">
                <h1 className="header__title">Post-It App <i className="fas fa-sticky-note"></i></h1>

                <InputForm className="header__input" onSubmit={this.handleSubmit} />
            </div>

            <div className="kanban">
                <section className="column">
                    <h2 className="column__title">TO DO</h2>
                    <section>
                        {this.state.todo.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onChangeStatus={this.handleChangeStatus} onUpdatePost={this.handleModifyPostit} />)}
                        </section>
                </section>

                <section className="column">
                    <h2 className="column__title">DOING</h2>
                    <section>
                        {this.state.doing.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onChangeStatus={this.handleChangeStatus} onUpdatePost={this.handleModifyPostit} />)}
                    </section>
                </section>

                <section className="column">
                    <h2 className="column__title">REVIEW</h2>
                    <section>
                        {this.state.review.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onChangeStatus={this.handleChangeStatus} onUpdatePost={this.handleModifyPostit} />)}
                    </section>
                </section>

                <section className="column">
                    <h2 className="column__title">DONE</h2>
                    <section>
                        {this.state.done.map(postit => <Post key={postit.id} text={postit.text} id={postit.id} status={postit.status} onDeletePost={this.handleRemovePostit} onChangeStatus={this.handleChangeStatus} onUpdatePost={this.handleModifyPostit} />)}
                    </section>
                </section>
            </div>
        </div>
    }
}

export default Postits
