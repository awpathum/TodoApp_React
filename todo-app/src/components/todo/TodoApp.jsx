import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
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
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
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
