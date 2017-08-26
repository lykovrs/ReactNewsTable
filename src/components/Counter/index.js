import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                <a href="#" onClick={this.handleIncrement}>Increment</a>
            </div>
        );
    }
}

export default connect((state) => {
    return {count: state.count}
}, {increment})(Counter);
