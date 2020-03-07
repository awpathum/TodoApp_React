import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSucesssMessage: false,
            //isUserLogedIn:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    loginClicked(event) {
        if (this.state.username === "mamba" && this.state.password === "mamba123") {

            //AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            AuthenticationService.registerSuccessfulLogin(this.state.username);
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            console.log('Failed')
            this.setState({
                showSucesssMessage: false,
                hasLoginFailed: true
            })
        }


    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSucesssMessage && <div>Login Successful</div>}
                    Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}
export default LoginComponent