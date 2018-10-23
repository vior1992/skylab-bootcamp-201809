import React, { Component } from 'react'
import logic from '../logic'

class AddPost extends Component {
    state = { img: null, text: null}

    componentDidMount() {
        logic.listPosts() 
    }
    
    handleContentChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    uploadWidget =() => {

        let _this= this

        window.cloudinary.openUploadWidget({ cloud_name: 'skylabcoders', upload_preset: 'wqmshx2h', tags:['pintegram']},
            function(error, result) {
               
                if (result.event === "success") {
                    const img = result.info.secure_url

                    _this.setState({ img })
                    
    
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
                <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <div className="upload">
                <img className="upload__img" src={this.state.img} ></img>
                <textarea defaultValue={this.state.text} onChange={this.handleContentChange}/>
                <button onClick={this.uploadWidget} className="upload-button">Add Image</button>
                {this.state.img !== null && <button onClick={this.handlePost} className="upload-button">Post</button>}
            </div>
        </div>
    }
}

export default AddPost
