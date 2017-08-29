import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment} from '../../AC'

class Counter extends Component {
    handleIncrement = (ev) => {
        ev.preventDefault();
        this
            .props
            .increment();
    }
    render() {
        return (
            <div>
                {this.props.count}
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {count: state.count}
}, {increment})(Counter);
