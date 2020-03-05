import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'


class Counter extends Component {

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
                <span className="count" >{this.state.counter}</span>

            </div>
        );
    }

    //Update the state = counter++
    increment() {
        //console.log('increment');
        this.setState({
            counter: this.state.counter + this.props.by
            // secondCounter: this.state.secondCounter + 1
        })



    }


}

Counter.defaultProps = {
    by: 1
}

Counter.prototypes = {
    by: PropTypes.number
}


export default Counter;