import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                            <Route path="/todos" component={ListTodosComponent}></Route>
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>

                    </>
                </Router>
            </div>

        )
    }
}
export default TodoApp

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
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSucesssMessage && <div>Login Successful</div>}
                Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{ id: 1, description: 'Learn React', targetDate: new Date(), done: false }, { id: 2, description: 'Learn Well', targetDate: new Date(), done: false }, { id: 3, description: 'Be happy', targetDate: new Date(), done: false }]
        }
    }
    render() {
        return <div>
            <h1>
                List Todos
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo => <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )

                    }

                </tbody>
            </table>

        </div>
    }
}

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                Header <hr/>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <hr/>Footer
            </div>
        )
    }
}



class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}. You can mamange your todos <Link to="/todos">here</Link></div>
    }
}

class ErrorComponent extends Component {
    render() {
        return <div>An Error Occured.</div>
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
