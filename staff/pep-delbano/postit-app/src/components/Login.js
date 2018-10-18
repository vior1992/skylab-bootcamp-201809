import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

    render() {
        return <div className="text-center">
            <form className="form-signin">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button className='btn btn-sm btn-primary btn-block' type="submit">Login</button>
            </form>
        </div>
    }
}

export default Login