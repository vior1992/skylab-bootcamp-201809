import React from 'react'
import logic from '../services/logic'
import LoginModalComponent from './loginmodal'
import RegisterModalComponent from './registermodal'
import ModalComponent from './modal'
import PostItComponent from './postit'
import $ from 'jquery'



class BoardComponent extends React.Component {

    state = {errorLoginMessage:"", logged:false, actual_user:{} }


    componentWillMount() {

        const user = logic.isLogged();
        if (user)
            this.setState({logged:true, actual_user:user});
    }

    addPostIt = (message) => {

        this.setState({actual_user:  logic.createPostit(this.state.actual_user.id, message)})
       
    }

    deletePostIt = (id) => {

         this.setState({actual_user:  logic.deletePostit(this.state.actual_user.id, id)})
    }

    editPostIt = (id, text) => {

        this.setState({actual_user:  logic.updatePostit(this.state.actual_user.id, id, text)})
    }

    showModalRegister = () => {

        $('#register-modal').modal('show') //not use Jquery

    }

    showModalLogin = () => {

        $('#login-modal').modal('show') //not use Jquery

    }

    loginUser  = (username, password) => {

        const user = logic.loginUser(username, password)
        if (user){
            this.setState({logged:true, actual_user: user})
            logic.setLoggedUser(user.id)

        }else{
            this.setState({errorLoginMessage: "The credentials entered are not correct..."})
            $('#modal').modal('show')
        }

    }

    registerUser = (name, surname, username, password) => {
        
        const user = logic.registerUser(name, surname, username, password)
        this.setState({actual_user:user})
        
    }
    
    logoutUser = () => {

        this.setState({logged:false, actual_user:{}})
        logic.removeLoggedUser();
    }

    render() {
        const {logged, errorLoginMessage, actual_user} = this.state

        return <section className="board">
            <RegisterModalComponent key="registerModal" onRegisterUser = {this.registerUser}></RegisterModalComponent>
            <LoginModalComponent key="loginModal" onLoginUser = {this.loginUser}></LoginModalComponent>
             <ModalComponent key="modal" title ="Error Login" message = {errorLoginMessage}/>
            <section className="board__forms">
                {logged && <form action="">
                    <input type="text" name="message" id="message" placeholder="Type your postit message..." />
                    <button className="button" onClick={(ev) => { ev.preventDefault(); this.addPostIt(document.getElementById("message").value) }}>Send...</button>
                </form>}
                <section className="board__panel-buttons">
                    {!logged  && <button onClick={() => this.showModalRegister()} className="button">Register</button>}
                    {!logged  && <button onClick={() => this.showModalLogin()} className="button">Login</button>}
                    {logged  && <button onClick = {this.logoutUser} className="button">Logout</button>}
                </section>
            </section>
            {logged && <section className="board__panel-postits">
                {
                    actual_user.postits.map((postit) => <PostItComponent key={postit.id} id={postit.id} onUpdatePost = {this.editPostIt} onDeletePost={this.deletePostIt} message={postit.text}></PostItComponent>)
                }
            </section>}

        </section>

    }
}

export default BoardComponent