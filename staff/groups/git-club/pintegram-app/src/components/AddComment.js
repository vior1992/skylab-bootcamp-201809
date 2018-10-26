import React, { Component } from 'react'
import logic from '../logic'

class AddComment extends Component {
    state = { img: null, text: null}

    // componentDidMount() {
    //     logic.listPosts() 
    // }
    
    handleContentChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    uploadWidget =() => {

        let _this= this

        let widget = window.cloudinary.openUploadWidget({ cloud_name: 'skylabcoders', upload_preset: 'wqmshx2h', tags:['pintegram']},
            function(error, result) {
               
                if (result.event === "success") {
                    const img = result.info.secure_url

                    _this.setState({ img })
                    
                    widget.close()
                }
            })
            console.log()
    }

    handlePost = event => {
        event.preventDefault()
        
        const { img, text } = this.state

        this.props.onPost(img, text)
    }


    render() {
        return <div className="div-home">
            <nav className="nav"><h1 onClick={this.props.onGoBack}>Pintegram App</h1>
            <div className="menu">
                <i className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <div className="upload"> 
                <div className="upload__center">
                    <div className="group__upload">
                        <img className="post__img" src={this.state.img} ></img>
                        <textarea defaultValue={this.state.text} onChange={this.handleContentChange}/>
                        <button onClick={this.uploadWidget} className="upload-button">Add Image</button>
                        {this.state.img !== null && <button onClick={this.handlePost} className="upload-button">Post</button>}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AddComment
