import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'



class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
                <span className="count" >{this.state.counter}</span>
            </div>
        )
    }
    increment(by) {
        //sconsole.log(`increment from parent ${by}`);
        this.setState({
            counter: this.state.counter + by
        })
    }
}

class CounterButton extends Component {

    //Define the initial state in the constructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            counter: 0,
            //secondCounter: 100
        }
        this.increment = this.increment.bind(this);
    }

    render() {

        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* <span className="count" >{this.state.counter}</span> */}

            </div>
        );
    }

    increment() {

        this.setState({
            counter: this.state.counter + this.props.by

        })
        this.props.incrementMethod(this.props.by);

    }


}

Counter.defaultProps = {
    by: 1
}

Counter.prototypes = {
    by: PropTypes.number
}

export default Counter;