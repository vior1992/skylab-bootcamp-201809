import React, { Component } from 'react'
import logic from '../logic'
import Post from './Post'

class Home extends Component {
    state = { gallery:[] ,posts: [], img: null }

    componentDidMount() {
        
        logic.listPosts()
            .then(posts=>{this.setState({posts})})
    //     // logic.listAllPosts()
    //     //     .then(posts => { this.setState({ posts }) })
    //     //     Request for images tagged xmas       
    //     //     axios.get('https://res.cloudinary.com/christekh/image/list/xmas.json')
    //     //         .then(res => {
    //     //             console.log(res.data.resources);
    //     //             this.setState({posts: res.data.resources});
    //     //         });
    //     // TODO error handling!
   

    }



    uploadWidget =() => {

        let _this= this

        window.cloudinary.openUploadWidget({ cloud_name: 'skylabcoders', upload_preset: 'wqmshx2h', tags:['pintegram']},
            function(error, result) {
               
                if (result.event === "success") {
                    debugger
                    logic.createPost(result.info.secure_url,"#")
                    const gallery = _this.state.gallery.concat(result)
                     const img = result.info.secure_url

                     _this.setState({ gallery , img })
                    // result.info.url
                    
    
                }
            })
            console.log()
    }

    handleSubmit = text =>
        logic.createPost(text)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!

    handleDeletePost = id =>
        logic.deletePost(id)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!


    handleUpdatePost = (id, text) =>
        logic.updatePost(id, text)
            .then(() => logic.listPosts())
            .then(posts => this.setState({ posts }))

    // TODO error handling!


    render() {
        return <div className="div-home">
            <h1>Pintegram App <i className="fas fa-sticky-note"></i></h1>
            
            <div className="upload">
            {/* <img src={this.state.img} ></img> */}
                <textarea />
                <button onClick={this.uploadWidget} className="upload-button">
                    Add Image
                </button>     
            </div>
          
             { <section>
                {this.state.posts.map(post => <div><img src={post.url}></img></div>)}
            </section> }


            {/* { <section>
                {this.state.gallery.map(post => <Post key={post.id} text={post.text} id={post.id} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section> } */}
        </div>
    }
}

export default Home
