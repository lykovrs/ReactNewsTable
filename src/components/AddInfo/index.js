import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddInfo extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    state = {
        name: "",
        text: ""
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            name: "",
            text: ""
        })
    }

    render() {
        return (
            <form name="addInfo" onSubmit={this.handleSubmit}>
                <label htmlFor="fieldName">
                   Add field name {this.state.name}
                </label>    
                <input id="fieldName" value={this.state.name} onChange={this.handleChange('name')} type="text"/>    
                <label htmlFor="fieldText">
                   Add field text {this.state.text}
                </label>    
                <input id="fieldText" value={this.state.text} onChange={this.handleChange('text')}  type="textarea"/>    
                <button type="submit">Send data</button>
            </form>
        );
    }
}
