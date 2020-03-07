import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <LoginComponent></LoginComponent>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSucesssMessage: false
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
            console.log('Sucessful')
            this.setState({
                showSucesssMessage: true,
                hasLoginFailed: false
            })
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
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                <ShowLoginSucesssMessage hasLoginFailed={this.state.showSucesssMessage}></ShowLoginSucesssMessage> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSucesssMessage && <div>Login Successful</div>}
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}


// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSucesssMessage(props) {
//     if (props.hasLoginFailed) {
//         return <div>Login Sucessful</div>
//     }
//     return null
// }


export default TodoApp