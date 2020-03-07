import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        )
    }
    retriveWelcomeMessage() {
        console.log('Retrive Clicked!');
    }
}
export default WelcomeComponent